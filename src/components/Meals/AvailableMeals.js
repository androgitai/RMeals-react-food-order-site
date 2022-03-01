import React, { useEffect } from 'react';
import styles from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealsItem from './MealsItem';
import useHttp from '../../hooks/use-http';

const AvailableMeals = () => {
  const {
    availableMeals: meals,
    sendRequest,
    isLoading,
    httpError,
  } = useHttp();

  useEffect(() => {
    sendRequest(
      'https://react-food-79a63-default-rtdb.europe-west1.firebasedatabase.app/meals.json'
    );
  }, [sendRequest]);

  const availableMeals = meals.map(meal => {
    return (
      <MealsItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        price={meal.price}
        description={meal.description}
      />
    );
  });

  return (
    <Card className={styles.meals}>
      {httpError && <p>{httpError}</p>}
      {isLoading && <p>Loading...</p>}
      <ul>{availableMeals}</ul>
    </Card>
  );
};

export default AvailableMeals;
