import { Observable, Subject } from 'rxjs';

import { IAlert } from 'shared/types/IAlert';
import { TColors } from 'shared/types/TColors';

class AlertService {
    private alertsSubject = new Subject<IAlert>();
    private closeAlertsSubject = new Subject<number>();

    onAlert = (): Observable<IAlert> => this.alertsSubject.asObservable();
    onClose = (): Observable<number> => this.closeAlertsSubject.asObservable();

    private alert(status: TColors, message: string, timeout: number) {
        this.alertsSubject.next({
            id: Math.round(window.performance.now() * 10),
            status,
            message,
            timeout: 5,
        });
    }

    success(message: string, timeout = 5) {
        this.alert('success', message, timeout);
    }

    error(message: string, timeout = 5) {
        this.alert('error', message, timeout);
    }

    warning(message: string, timeout = 5) {
        this.alert('warning', message, timeout);
    }

    info(message: string, timeout = 5) {
        this.alert('info', message, timeout);
    }

    close(alertId: number) {
        this.closeAlertsSubject.next(alertId);
    }
}

export const alertService = new AlertService();
