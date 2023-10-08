import { IAlert } from 'shared/types/IAlert';
import { Alert } from '../Alert';
import styles from './styles.module.css';

export const AlertService = () => {
    const alerts: IAlert[] = [{ id: 0, message: 'You are black!', status: 'info' }];

    const alertCounter = alerts.map((item) => (
        <Alert key={item.id} id={item.id} status={'info'} message={item.message} />
    ));

    return <div className={styles.container}>{alertCounter}</div>;
};
