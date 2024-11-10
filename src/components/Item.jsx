import React, { useState, useEffect } from 'react';

function Item({ cartData, index, cart, updateCart  }) {
    const [count, setCount] = useState(cartData.quantity);
    const price = cartData.price;
    const image = cartData.image;
    
    // Update the quantity for the current item when count changes
    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1);
            const updatedCart = cart.map((item, i) =>
                i === index ? { ...item, quantity: count - 1 } : item
            );
            updateCart(updatedCart);
        } else {
            // Remove the item if the count goes below 1
            const updatedCart = cart.filter((_, cartIndex) => cartIndex !== index);
            updateCart(updatedCart);
        }
    };

    const handleIncrement = () => {
        setCount(count + 1);
        const updatedCart = cart.map((item, i) =>
            i === index ? { ...item, quantity: count + 1 } : item
        );
        updateCart(updatedCart);
    };

    useEffect(() => {
        let updatedCount = cartData.quantity >= count ? cartData.quantity : count;
        setCount(updatedCount);
    } , [cartData.quantity])

    return (
        <div className='flex gap-x-6 mb-2'>
            <img src={image} alt="product" className='w-[60px]' />
            <div>
                <p>This is shoes</p>
                <p>${price.toFixed(2)}</p>
            </div>
            <div className='ml-auto flex gap-x-2 h-max'>
                <button 
                    onClick={handleDecrement} 
                    className='p-2 rounded-lg bg-slate-400'>-</button>
                <span>{count}</span>
                <button 
                    onClick={handleIncrement} 
                    className='p-2 rounded-lg bg-slate-400'>+</button>
            </div>
        </div>
    );
}

export default Item;
