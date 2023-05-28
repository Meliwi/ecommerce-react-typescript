import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import productReducer from "./src/reducers/productSlice";
import userReducer from "./src/reducers/userSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    user: userReducer,
  },
  middleware: [...getDefaultMiddleware(), thunk],
});

export default store;
