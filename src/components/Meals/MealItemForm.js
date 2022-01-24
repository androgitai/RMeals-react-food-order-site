import styles from './MealItemForm.module.css';
import Button from '../UI/Button';
import Input from '../UI/Input';

const MealItemForm = () => {
  return (
    <form className={styles.form}>
      <Input />
      <Button type='submit'>+ Add</Button>
    </form>
  );
};

export default MealItemForm;
