import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import CartProvider from '../Context/cartProvider'

function Root() {
  return (
    <CartProvider>
      <Navbar />
      <Outlet />
    </CartProvider>
  )
}

export default Root