import React from 'react'
import Cart from './Cart'
import cartData from '../data'

function Container(props) {
  return (
    <>
    <div className='grid grid-cols-[max-content_max-content] justify-around gap-6 pt-20 px-6  max-w-[900px]'>
    {
      cartData.map((ele , i) => (
      <Cart data = {ele} key = {i} handleClick = {props.handleClick} />
    ))
    }
    </div>
    </>
  )
}

export default Container