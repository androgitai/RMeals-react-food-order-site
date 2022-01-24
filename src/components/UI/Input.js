import styles from './Input.module.css';

const Input = props => {
  return (
    <div className={styles.input}>
      <label htmlFor='label'> Amount: </label>
      <input type='number' />
    </div>
  );
};

export default Input;
