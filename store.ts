import { configureStore } from "@reduxjs/toolkit";
import productReducer from './src/reducers/productSlice';
import userReducer from './src/reducers/userSlice';

const store = configureStore({
    reducer: {
        product: productReducer,
        user: userReducer
    }
});

export default store;