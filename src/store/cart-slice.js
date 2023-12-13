import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const isItemExisting = state.items.find((item) => item.id === newItem.id);
      // console.log(isItemExisting);
      state.totalQuantity++;
      if (!isItemExisting) {
        state.items.push({
          id: newItem.id,
          name: newItem.title,
          price: newItem.price,
          totalPrice: newItem.price,
          quantity: 1
        });
      } else {
        isItemExisting.quantity += 1;
        isItemExisting.totalPrice += newItem.price;
      }
    },

    removeItemFromCart(state, action) {
      const id = action.payload;
      const isItemExisting = state.items.find((item) => item.id === id);
      // console.log(isItemExisting);
      state.totalQuantity--;
      if (isItemExisting.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        isItemExisting.quantity--;
        isItemExisting.totalPrice -= isItemExisting.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
