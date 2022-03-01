import React from 'react';

const CartContext = React.createContext({
  items: [],
  amount: 0,
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
});

export default CartContext;
