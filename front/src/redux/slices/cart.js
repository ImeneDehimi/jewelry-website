import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state,action) => {
      state.cart.push(action.payload) 
    },
    deletefromCart: (state,action) => {
      state.cart = state.cart.filter((element)=>  element.id !== action.payload)
    },
    emptycart: (state) => {
      state.cart = []
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const itemToUpdate  =  state.cart.find((item) => item.id === id); 
      itemToUpdate.quantity = quantity;      
    },
  },
})


export const { addToCart ,deletefromCart,emptycart,updateQuantity} = cartSlice.actions

export default cartSlice.reducer