import { Button } from '../Button';
import styles from './styles.module.css';

export const ButtonsGroup = () => {
    return (
        <div className={styles.container}>
            <Button>Info</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="error">Error</Button>
            <Button variant="success">Success</Button>
        </div>
    );
};
