'use client';

import { error, info, success, warning } from 'shared/lib/alertService';
import { Button } from '../Button';
import styles from './styles.module.css';

export const ButtonsGroup = () => {
    return (
        <div className={styles.container}>
            <Button
                onClick={() => {
                    info('Ты молодец, умеешь нажимать на кнопки');
                }}
            >
                Info
            </Button>
            <Button
                variant="warning"
                onClick={() => {
                    warning('Пожалуйста, не нажимай сюда...');
                }}
            >
                Warning
            </Button>
            <Button
                variant="error"
                onClick={() => {
                    error('Я приду к тебе через 10 минут');
                }}
            >
                Error
            </Button>
            <Button
                variant="success"
                onClick={() => {
                    success('Неважно');
                }}
            >
                Success
            </Button>
        </div>
    );
};
