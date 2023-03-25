import { createSlice } from "@reduxjs/toolkit";

const initialState = {
      products: [],
      total: 0,
};

export const cartSlice = createSlice({
      name: "cart",
      initialState,
      reducers: {
            addToCart: (state, action) => {
                  // if we already have the item in our cart, just increase its quantity
                  const item = state.products.find((item) => item._id === action.payload._id);
                  if (item) {
                        item.quantity += action.payload.quantity;
                  } else {
                        state.products.push(action.payload);
                  }
            },
            removeItem: (state, action) => {
                  state.products = state.products.filter(item => item._id !== action.payload)
            },
            resetCart: (state) => {
                  state.products = []
            },
      },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeItem, resetCart } = cartSlice.actions;

export default cartSlice.reducer;