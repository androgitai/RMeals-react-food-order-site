import React, { useContext, useState } from 'react';
import styles from './Cart.module.css';
import Modal from '../UI/Modal';
import Button from '../UI/Button';
import CartContext from '../store/cart-context';
import CartItem from './CartItem';
import Checkout from './Checkout';
import useHttp from '../../hooks/use-http';

const Cart = props => {
  const { sendRequest, isLoading, httpError } = useHttp();
  const [orderIsSent, setOrderIsSent] = useState(false);
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

  const submitOrderHandler = customerData => {
    setOrderIsSent(true);
    sendRequest(
      {
        url: 'https://react-food-79a63-default-rtdb.europe-west1.firebasedatabase.app/orders.json',
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: {
          customerDetails: customerData,
          orderDetails: cartCTX.items,
        },
      },
      responseData => console.log(responseData)
    );
    cartCTX.clearCart();

    setTimeout(() => {
      setOrderIsSent(false);
      props.onClose();
    }, 3000);
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

  const modal = orderIsSent ? (
    <Modal onClose={props.onClose}>Thank you for your order!</Modal>
  ) : (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>£{totalAmount}</span>
      </div>
      {isLoading ? <p>Sending Order...</p> : ''}
      {httpError ? <p>Could not send order. Please contact us.</p> : ''}
      {showCustomerDetailsForm && (
        <Checkout
          onOrderSubmit={submitOrderHandler}
          onCancel={cancelOrderHandler}
        />
      )}
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

  return modal;
};

export default Cart;
