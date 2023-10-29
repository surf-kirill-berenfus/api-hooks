'use client';

import { ReactNode } from 'react';
import classNames from 'classnames';

import { TColors } from 'shared/types/TColors';

import { Spinner } from '../Spinner';
import styles from './styles.module.css';

type Props = {
    isDisabled?: boolean;
    isLoading?: boolean;
    variant?: TColors;
    children: ReactNode;
    onClick?: () => void;
};

export const Button = ({ isDisabled, isLoading, variant = 'info', children, onClick }: Props) => {
    return (
        <button
            disabled={isDisabled}
            className={classNames(styles.buttonContainer, styles[variant])}
            onClick={onClick}
        >
            {isLoading && <Spinner height={18} width={18} />}
            {children}
        </button>
    );
};
