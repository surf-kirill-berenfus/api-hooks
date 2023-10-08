import { ReactNode } from 'react';
import classNames from 'classnames';

import { Colors } from 'shared/types/IColors';

import styles from './styles.module.css';

type Props = {
    variant?: Colors;
    children: ReactNode;
};

export const Alert = ({ variant = 'info', children }: Props) => {
    return <div className={classNames(styles.container, styles[variant])}>{children}</div>;
};
