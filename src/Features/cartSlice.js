import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
    name: "cart",
    initialState:{
        cart:[]
    },
    reducers:{
        addCart: (state, action) => {
            state.cart = [...action.payload]
        }
    }
})

export default  cartSlice.reducer
export const {addCart} = cartSlice.actions
