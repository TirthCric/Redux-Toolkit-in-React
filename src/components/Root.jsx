import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import {Provider} from "react-redux"
import { store } from '../App/store'

function Root() {
  return (
    <Provider store={store}>
      <Navbar />
      <Outlet />
    </Provider>
  )
}

export default Root