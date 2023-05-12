import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    enablePayment: false,
}

const paymentSlice = createSlice({
    name: "payment",
    initialState, 
    reducers: {
        setEnablePayment: (state, action) => {
            state.enablePayment = action.payload;
        }
    }
})


export const { setEnablePayment } = paymentSlice.actions;
export const selectEnablePayment = (state: any) => state.payment.enablePayment;
export default paymentSlice.reducer;