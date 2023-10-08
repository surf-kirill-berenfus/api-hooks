import { useCallback, useEffect } from 'react';
import classNames from 'classnames';

import styles from './styles.module.css';
import { IAlert } from 'shared/types/IAlert';
import { alertService } from 'shared/lib/alertService';

interface Props extends IAlert {}

export const Alert = ({ id, status = 'info', message, timeout }: Props) => {
    const closeAlert = useCallback(() => {
        alertService.close(id);
    }, [id]);

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
        <div className={classNames(styles.container, styles[status])} onClick={closeAlert}>
            {message}
        </div>
    );
};
