import { configureStore } from "@reduxjs/toolkit";
import productReducer from './src/reducers/productSlice';
import userReducer from './src/reducers/userSlice';
import paymentReducer from './src/reducers/paymentSlice';

const store = configureStore({
    reducer: {
        product: productReducer,
        user: userReducer,
        payment: paymentReducer,
    }
});

export default store;