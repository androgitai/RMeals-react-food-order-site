import React from 'react';

const CartContext = React.createContext({
  items: [],
  amount: 0,
  addToCart: () => {},
  removeFromCart: () => {},
});

export default CartContext;
