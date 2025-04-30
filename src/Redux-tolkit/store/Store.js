import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slice/slice.js";
import cartSlices from "../slice/cartSlice.js";
import  shareSlice  from "../slice/sharedataSlice.js";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartSlices,
    share:shareSlice,
  },
});
