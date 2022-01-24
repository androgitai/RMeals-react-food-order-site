import styles from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealsItem from './MealsItem';

const AvailableMeals = () => {
  return (
    <Card className={styles.meals}>
      <ul>
        <MealsItem />
        <MealsItem />
        <MealsItem />
      </ul>
    </Card>
  );
};

export default AvailableMeals;
