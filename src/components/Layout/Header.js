import React, { Fragment, useContext } from 'react';
import styles from './Header.module.css';
import headerPicture from '../../assets/meals.jpg';
import Button from '../UI/Button';
import CartIcon from '../UI/CartIcon';
import Badge from '../UI/Badge';
import btnstyles from '../UI/Button.module.css';
import CartContext from '../store/cart-context';

const Header = props => {
  const cartCTX = useContext(CartContext);

  const numberOfCartItems = cartCTX.items.reduce((sum, item) => {
    return (sum = sum + item.amount);
  }, 0);

  return (
    <Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <Button className={btnstyles.button} onClick={props.onShowCart}>
          <CartIcon />
          Your Cart
          <Badge>{numberOfCartItems}</Badge>
        </Button>
      </header>
      <div className={styles['main-image']}>
        <img src={headerPicture} alt='Header Meals' />
      </div>
    </Fragment>
  );
};

export default Header;
