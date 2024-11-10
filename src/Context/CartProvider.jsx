import React, { useState, useEffect } from 'react';
import { CartContext } from './cardContext';

function CartProvider({ children }) {
  const [cartData, setCartData] = useState(() => {
    // Load initial cart data from localStorage, or default to an empty array
    const savedCart = localStorage.getItem('cartData');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    // Save cart data to localStorage whenever it changes
    localStorage.setItem('cartData', JSON.stringify(cartData));
  }, [cartData]);

  return (
    <CartContext.Provider value={{ cartData, setCartData }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
