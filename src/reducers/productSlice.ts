import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../interfaces/Product";
import { CartProduct } from "../interfaces/CartProduct";

const initialState = {
    products: [],
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    updateProductStock: (state, action) => {
      const products: Product[] = state.products;
      action.payload.map((item: CartProduct) => {
        const productIndex = products.findIndex((element) => element.id === item.id);
        products[productIndex].stock -= item.quantity;
      })
    }
  },
});


export const { setProducts, updateProductStock } = productSlice.actions;

export const selectProducts = (state: any) => state.product.products;

export default productSlice.reducer;