import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemList: [],
  totalQuantity: 0,
  showCart: false,
};
export const cartSlices = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.itemList.find(
        (item) => item.id === newItem.id
      );
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalprice += newItem.price;
      } else {
        state.itemList.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalprice: newItem.price,
          name: newItem.name,
        });
      }
      state.totalQuantity++;
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const existingitem = state.itemList.find((item) => item.id === id);
      if (existingitem.quantity === 1) {
        state.itemList = state.itemList.filter((item) => item.id !== id);
      } else {
        existingitem.quantity--;

        existingitem.totalprice -= existingitem.price;
      }
      if (state.itemList.length === 0) {
        state.totalQuantity = 0;
      }
    },
    showCart: (state) => {
      state.showCart = true;
    },
  },
});
export const { addToCart, removeFromCart, showCart } = cartSlices.actions;
export default cartSlices.reducer;
