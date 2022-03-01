import React, { useContext, useState } from 'react';
import styles from './Cart.module.css';
import Modal from '../UI/Modal';
import Button from '../UI/Button';
import CartContext from '../store/cart-context';
import CartItem from './CartItem';
import Checkout from './Checkout';

const Cart = props => {
  const [showCustomerDetailsForm, setShowCustomerDetailsForm] = useState(false);
  const cartCTX = useContext(CartContext);

  const totalAmount = cartCTX.totalAmount.toFixed(2);
  const hasItems = cartCTX.items.length > 0;

  const cartItemRemoveHandler = id => {
    cartCTX.removeFromCart(id);
  };

  const cartItemAddHandler = item => {
    cartCTX.addToCart({ ...item, amount: 1 });
  };

  const showCustomerDetailsFormHandler = () => {
    setShowCustomerDetailsForm(true);
  };

  const cancelOrderHandler = () => {
    setShowCustomerDetailsForm(false);
  };

  const cartItems = (
    <ul className={styles['cart-items']}>
      {cartCTX.items.map(item => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>£{totalAmount}</span>
      </div>
      {showCustomerDetailsForm && <Checkout onCancel={cancelOrderHandler} />}
      {!showCustomerDetailsForm && (
        <div className={styles.actions}>
          <Button className={styles['button--alt']} onClick={props.onClose}>
            Close
          </Button>
          {hasItems && (
            <Button
              className={styles.button}
              onClick={showCustomerDetailsFormHandler}
            >
              Order
            </Button>
          )}
        </div>
      )}
    </Modal>
  );
};

export default Cart;
