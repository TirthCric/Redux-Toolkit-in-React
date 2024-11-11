import React, { useState, useEffect } from 'react';
import Item from './Item';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCart } from '../Features/cartSlice';

function ItemList({ cart, updateCart }) {
    const [total, setTotal] = useState(0);
    console.log(cart);

    // Calculate total when the cart or quantities change
    useEffect(() => {
        const totalAmount = cart.reduce((acc, cartItem) => acc + cartItem.price * cartItem.quantity, 0);
        setTotal(totalAmount);
    }, [cart]);

    // setting data to store
    const dispatch = useDispatch()
    

    return (
        <div className='fixed top-24 right-16 w-96 border-2 p-4 bg-neutral-200 rounded-xl  text-xl font-sans'>
            <h2 className='align-left text-black-200 mb-6 font-semibold'>Cart</h2>
            {
                cart.length === 0 ? (
                    <p>No items in the cart</p>
                ) : (
                    cart.map((cartItem, i) => (
                        <Item
                            cartData={cartItem}
                            key={i}
                            index={i}
                            cart={cart}
                            updateCart={updateCart}

                        />
                    ))
                )
            }
            <p className='text-center font-semibold mt-6'>Total: ${total.toFixed(2)}</p>
            <div className='flex justify-center mt-4'>
                <Link to="payment">
                    <button 
                    className='text-base bg-gray-400 rounded-full py-1.5 px-2.5 font-semibold  transition transform duration-300 hover:scale-105 '
                    onClick={() => dispatch(addCart(cart))}
                    >
                        Proceed To Payment
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default ItemList;
