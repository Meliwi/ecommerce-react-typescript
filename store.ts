import { configureStore } from "@reduxjs/toolkit";
import productReducer from './src/reducers/productSlice';

const store = configureStore({
    reducer: {
        product: productReducer,
    }
});

export default store;