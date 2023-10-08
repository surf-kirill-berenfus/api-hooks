import { Observable, Subject } from 'rxjs';

import { IAlert } from 'shared/types/IAlert';
import { TColors } from 'shared/types/TColors';

const alertsSubject = new Subject<IAlert>();

const alert = (status: TColors, message: string, timeout: number): void => {
    alertsSubject.next({
        id: Math.round(window.performance.now() * 10),
        status,
        message,
    });
};

export const success = (message: string, timeout = 0): void => {
    alert('success', message, timeout);
};

export const error = (message: string, timeout = 0): void => {
    alert('error', message, timeout);
};

export const warning = (message: string, timeout = 0): void => {
    alert('warning', message, timeout);
};

export const info = (message: string, timeout = 0): void => {
    alert('info', message, timeout);
};

export const onAlert = (): Observable<IAlert> => alertsSubject.asObservable();
