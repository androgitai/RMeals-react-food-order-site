import React from 'react';
import styles from './Cart.module.css';
import Modal from '../UI/Modal';
import Button from '../UI/Button';

const cartItems = '';

const Cart = props => {
  return (
    <Modal>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>£22.00</span>
      </div>
      <div className={styles.actions}>
        <Button className={styles['button--alt']}>Close</Button>
        <Button className={styles.button}>Order</Button>
      </div>
    </Modal>
  );
};

export default Cart;
