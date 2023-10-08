import classNames from 'classnames';
import styles from './styles.module.css';

type Props = {
    text: string;
    color?: 'error' | 'info' | 'success' | 'warning';
};

export const Button = ({ text, color = 'info' }: Props) => {
    return <button className={classNames(styles.buttonContainer, styles[color])}>{text}</button>;
};
