import styles from './MealsItem.module.css';
import MealItemForm from './MealItemForm';

const MealsItem = () => {
  return (
    <li className={styles.meal}>
      <div>
        <h3>Sushi</h3>
        <div className={styles.description}>Finest fish and veggies</div>
        <div className={styles.price}>£22.99</div>
      </div>
      <MealItemForm />
    </li>
  );
};

export default MealsItem;
