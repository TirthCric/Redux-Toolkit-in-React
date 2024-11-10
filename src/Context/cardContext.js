import React,{ createContext, useContext } from "react";

export const CartContext = createContext();

export default function useCartContext()  {
    return useContext(CartContext)
}