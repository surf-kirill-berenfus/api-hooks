'use client';

import { ReactNode } from 'react';
import classNames from 'classnames';

import { TColors } from 'shared/types/TColors';

import styles from './styles.module.css';

type Props = {
    variant?: TColors;
    children: ReactNode;
    onClick?: () => void;
};

export const Button = ({ variant = 'info', children, onClick }: Props) => {
    return (
        <button className={classNames(styles.buttonContainer, styles[variant])} onClick={onClick}>
            {children}
        </button>
    );
};
