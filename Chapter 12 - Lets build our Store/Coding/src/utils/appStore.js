import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  // this reducer is used to modify app store having multiple small reducers
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
