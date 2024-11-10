import React from 'react'


function Cart(props) {
 const data = props.data
  // console.log(data);
  
  return (
    <div className='p-4 w-52'>
        <img src={data.image} alt="image" className='w-52 h-40'/>
        <div className='bg-neutral-200 font-semibold p-4'>
            <h2>This is Shoes</h2>
            <p>price: ${data.price}</p>
            <button onClick={() => props.handleClick(data)} className='bg-neutral-400 p-2 rounded-xl mt-2'>Add to cart</button>
        </div>
    </div>
  )
}

export default Cart