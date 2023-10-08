'use client';

import { alertService } from 'shared/lib/alertService';
import { Button } from '../Button';
import styles from './styles.module.css';

export const ButtonsGroup = () => {
    return (
        <div className={styles.container}>
            <Button
                onClick={() => {
                    alertService.info('Ты молодец, умеешь нажимать на кнопки');
                }}
            >
                Info
            </Button>
            <Button
                variant="warning"
                onClick={() => {
                    alertService.warning('Пожалуйста, не нажимай сюда...');
                }}
            >
                Warning
            </Button>
            <Button
                variant="error"
                onClick={() => {
                    alertService.error('Я приду к тебе через 10 минут');
                }}
            >
                Error
            </Button>
            <Button
                variant="success"
                onClick={() => {
                    alertService.success('Неважно');
                }}
            >
                Success
            </Button>
        </div>
    );
};
