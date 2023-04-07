import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: localStorage.getItem("products")
    ? JSON.parse(localStorage.getItem("products"))
    : [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export const {} = productSlice.actions;
