import React, { Fragment, useContext, useEffect, useState } from 'react';
import styles from './Header.module.css';
import headerPicture from '../../assets/meals.jpg';
import Button from '../UI/Button';
import CartIcon from '../UI/CartIcon';
import Badge from '../UI/Badge';
import btnstyles from '../UI/Button.module.css';
import CartContext from '../store/cart-context';

const Header = props => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCTX = useContext(CartContext);
  const { items } = cartCTX;

  const numberOfCartItems = items.reduce((sum, item) => {
    return (sum = sum + item.amount);
  }, 0);

  const buttonStyles = `${btnstyles.button} ${
    btnIsHighlighted ? btnstyles.bump : ''
  }`;

  useEffect(() => {
    if (items.length === 0) return;
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <Button className={buttonStyles} onClick={props.onShowCart}>
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
