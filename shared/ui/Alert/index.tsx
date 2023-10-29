import { useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';

import styles from './styles.module.css';
import { IAlert } from 'shared/types/IAlert';
import { alertService } from 'shared/lib/alertService';

interface Props extends IAlert {}

export const Alert = ({ id, status = 'info', message, timeout }: Props) => {
    const [isVisible, setIsVisible] = useState(false);

    const closeAlert = useCallback(() => {
        setIsVisible(false);
        setTimeout(() => {
            alertService.close(id);
        }, 300);
    }, [id]);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    useEffect(() => {
        if (timeout > 0) {
            const timer = setTimeout(() => {
                closeAlert();
            }, timeout * 1_000);

            return () => {
                clearTimeout(timer);
            };
        }
    }, [closeAlert, id, timeout]);

    return (
        <div
            className={classNames(styles.container, styles[status], {
                [styles.visible]: isVisible,
            })}
            onClick={closeAlert}
        >
            {message}
        </div>
    );
};
