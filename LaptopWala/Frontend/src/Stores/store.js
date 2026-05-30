import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Redux_Slicer/authSlice";
import cartReducer from "../Redux_Slicer/cartSlice";


export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
  },
});