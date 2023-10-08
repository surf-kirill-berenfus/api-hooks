'use client';

import { useEffect, useState } from 'react';

import { alertService } from 'shared/lib/alertService';
import { IAlert } from 'shared/types/IAlert';

import { Alert } from '../Alert';
import styles from './styles.module.css';

export const AlertService = () => {
    const [alerts, setAlerts] = useState<IAlert[]>([]);

    const alertCounter = alerts.map((item) => <Alert key={item.id} {...item} />);

    useEffect(() => {
        const alertSubsctiption = alertService.onAlert().subscribe((newAlert) => {
            setAlerts((prev) => [...prev, newAlert]);
        });

        const closeAlertSubsctiption = alertService.onClose().subscribe((alertId) => {
            setAlerts((prev) => prev.filter((alert) => alert.id !== alertId));
        });

        return () => {
            alertSubsctiption.unsubscribe();
            closeAlertSubsctiption.unsubscribe();
        };
    }, []);

    return <div className={styles.container}>{alertCounter}</div>;
};
