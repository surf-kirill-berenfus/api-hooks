import { ReactNode } from 'react';
import classNames from 'classnames';

import { TColors } from 'shared/types/TColors';

import styles from './styles.module.css';
import { IAlert } from 'shared/types/IAlert';

interface Props extends IAlert {}

export const Alert = ({ status = 'info', message }: Props) => {
    return <div className={classNames(styles.container, styles[status])}>{message}</div>;
};
