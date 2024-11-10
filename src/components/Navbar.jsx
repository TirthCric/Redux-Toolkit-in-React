import React from 'react'
import logo from '../assets/logo.jpg'

function Navbar() {
  return <>
  <header className='fixed w-full px-4 py-2 bg-gray-400'>
    <nav className='flex gap-24 items-center px-4'>
        <div className='' >
            <img src={logo} alt="image" className='w-16 rounded-full' />
        </div>
        <ul className='flex gap-10 text-gray-800 text-xl'>
            <li><a href="#">Home</a></li>
            <li><a href="#">Catagories</a></li>
            <li><a href="#">About</a></li>
        </ul>
    </nav>
  </header>
  </>
}

export default Navbar