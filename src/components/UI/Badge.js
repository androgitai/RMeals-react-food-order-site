import styles from './Button.module.css';

const Badge = props => {
  return (
    <div className={`${styles.badge} ${styles.bump}`}>{props.children}</div>
  );
};

export default Badge;
