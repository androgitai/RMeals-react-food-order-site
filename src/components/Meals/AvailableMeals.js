import React, { useEffect, useState } from 'react';
import styles from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealsItem from './MealsItem';
import useHttp from '../../hooks/use-http';

const AvailableMeals = () => {
  const [availableMeals, setAvailableMeals] = useState([]);
  const { sendRequest, isLoading, httpError } = useHttp();

  useEffect(() => {
    const tranformData = responseData => {
      let loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          price: responseData[key].price,
          description: responseData[key].description,
        });
      }
      setAvailableMeals(loadedMeals);
    };

    sendRequest(
      {
        url: 'https://react-food-79a63-default-rtdb.europe-west1.firebasedatabase.app/meals.json',
      },
      tranformData
    );
  }, [sendRequest]);

  const availableMealsDisplay = availableMeals.map(meal => {
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
      <ul>{availableMealsDisplay}</ul>
    </Card>
  );
};

export default AvailableMeals;
