import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function PaymentPage() {
    const [paymentMethod, setPaymentMethod] = useState("Credit Card")
    const [total, setTotal] = useState(0)
    const cartData = useSelector(state => state.cart)

    // calculate total amount 
    useEffect(() => {
        const totalAmount = cartData.reduce((acc, cartItem) => acc + cartItem.price * cartItem.quantity, 0);
        setTotal(totalAmount);
    }, [cartData]);
    return (
        <div className='pt-24'>
            <div className='flex justify-around  p-4 border-2 border-black'>
                <div className=''>
                    <div className="flex flex-col items-center p-4">
                        <div className="mb-4">
                            <label className="mr-4 font-semibold">
                                <input
                                    type="radio"
                                    name="payment"
                                    value="Cash on Delivery"
                                    checked={paymentMethod === 'Cash on Delivery'}
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                    className="mr-2"
                                />
                                Cash on Delivery
                            </label>
                            <label className="font-semibold">
                                <input
                                    type="radio"
                                    name="payment"
                                    value="Credit Card"
                                    checked={paymentMethod === 'Credit Card'}
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                    className="mr-2"
                                />
                                Credit Card
                            </label>
                        </div>

                        {paymentMethod === 'Credit Card' && (
                            <div className="border border-gray-300 p-6 rounded-lg w-full max-w-sm">
                                <label className="block mb-4 font-semibold">
                                    Enter your card number:
                                    <input
                                        type="text"
                                        placeholder="Card Number"
                                        className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </label>
                                <label className="block mb-4 font-semibold">
                                    Enter your card's expiry date:
                                    <input
                                        type="text"
                                        placeholder="Expiry Date"
                                        className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </label>
                                <label className="block mb-4 font-semibold">
                                    Enter your CVV number:
                                    <input
                                        type="password"
                                        placeholder="CVV"
                                        className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </label>
                            </div>
                        )}

                        <button className="mt-4 bg-gray-400 text-white font-semibold py-2 px-6 rounded-full cursor-pointer hover:bg-gray-500 disabled:opacity-50">
                            Confirm Payment
                        </button>
                    </div>
                </div>
                <div className='  w-96 h-max border-2 p-4 bg-neutral-200 rounded-xl text-xl font-sans'>
                    <h2 className='align-left text-black-200 mb-6 font-semibold'>Cart</h2>
                    {
                        cartData.length === 0 ? (
                            <p>No items in the cart</p>
                        ) : (
                            cartData.map((cartItem, i) => (
                                <div key={`${cartItem.id}-${i}`} className='flex gap-x-6 mb-2'>
                                    <img src={cartItem.image} alt="product" className='w-[60px]' />
                                    <div>
                                        <p>This is shoes</p>
                                        <p>${cartItem.price.toFixed(2)}</p>
                                    </div>
                                </div>
                            ))
                        )
                    }
                    <p className='text-center font-semibold mt-6'>Total: ${total.toFixed(2)}</p>
                    <div className='flex justify-center mt-4'>
                        <Link to="/">
                            <button className='text-base bg-gray-400 rounded-full py-1.5 px-2.5 font-semibold  transition transform duration-300 hover:scale-105 '>
                                Go back to shoping cart
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentPage