import React, { Fragment } from 'react';
import styles from './Header.module.css';
import headerPicture from '../../assets/meals.jpg';
import Button from '../UI/Button';
import CartIcon from '../UI/CartIcon';
import Badge from '../UI/Badge';
import btnstyles from '../UI/Button.module.css';

const Header = () => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <Button className={btnstyles.button}>
          <CartIcon />
          Your Cart
          <Badge>1</Badge>
        </Button>
      </header>
      <div className={styles['main-image']}>
        <img src={headerPicture} alt='Header Meals' />
      </div>
    </Fragment>
  );
};

export default Header;
