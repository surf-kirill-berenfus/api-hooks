import { ReactNode } from 'react';
import classNames from 'classnames';

import { Colors } from 'shared/types/TColors';

import styles from './styles.module.css';

type Props = {
    variant?: Colors;
    children: ReactNode;
};

export const Button = ({ variant = 'info', children }: Props) => {
    return (
        <button className={classNames(styles.buttonContainer, styles[variant])}>{children}</button>
    );
};
