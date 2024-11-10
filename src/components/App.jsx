import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import ItemList from './ItemList';
import Container from './Container';

function App() {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // getting cart data from local storage
    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem("cart"))
         setCart(cart) 
    },[])

    // setting cart data on local storage
    useEffect(() => {
        localStorage.setItem("cart" , JSON.stringify(cart))
    },[cart])

    const handleClick = (product) => {
        const existingItem = cart.find(cartItem => cartItem.id === product.id);

        if (existingItem) {
            // Update the quantity of the existing item
            console.log("same item");
            
            const updatedCart = cart.map(cartItem => 
                cartItem.id === product.id 
                ? { ...cartItem, quantity: cartItem.quantity + 1 } 
                : cartItem
            );
            setCart(updatedCart);
        } else {
            // Add the new product to the cart with an initial quantity of 1
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    const updateCart = (cart) => {
        setCart(cart);
    };

    return (
        <>
            <ItemList cart={cart} updateCart={updateCart} />
            <Container handleClick={handleClick} />
        </>
    );
}

export default App;
