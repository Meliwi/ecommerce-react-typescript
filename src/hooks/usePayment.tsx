import { useContext } from "react";
import { PaymentContext } from "../context/payment.js";

export const usePayment = () => {
  const context = useContext(PaymentContext);

  if (context === undefined) {
    throw new Error("usePayment must be used within a CartProvider");
  }
  return context;
};
