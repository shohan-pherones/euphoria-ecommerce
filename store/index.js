import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./productSlice";

const store = configureStore({
  reducer: {
    products: productSlice.reducer,
  },
});

export default store;
