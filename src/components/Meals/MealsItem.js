import { useContext } from 'react';
import styles from './MealsItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../store/cart-context';

const MealsItem = props => {
  const cartCTX = useContext(CartContext);
  const addToCartHandler = amount => {
    cartCTX.addToCart({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>£{props.price.toFixed(2)}</div>
      </div>
      <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
    </li>
  );
};

export default MealsItem;
