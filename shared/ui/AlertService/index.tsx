import { Alert } from '../Alert';
import styles from './styles.module.css';

export const AlertService = () => {
    const alerts = [{ id: 0, message: 'You are black!', status: 'info' }];

    const alertCounter = alerts.map((item) => (
        <Alert key={item.id} variant={'info'}>
            {item.message}
        </Alert>
    ));

    return <div className={styles.container}>{alertCounter}</div>;
};
