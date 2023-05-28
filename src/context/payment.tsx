import { ReactNode, createContext, useState } from "react";

interface PaymentContextType {
  enablePayment: Boolean;
  enableFinalPayment: Boolean;
  handleEnablePayment: () => void;
  handleFinalPayment: () => void;
  amount: number;
  handleAmount: (value: number) => void;
}

interface PaymentProviderProps {
  children: ReactNode;
}

//Creating context
export const PaymentContext = createContext<PaymentContextType>({
    enablePayment: false,
    enableFinalPayment: false,
    handleEnablePayment: () => {},
    handleFinalPayment: () => {},
    amount: 0,
    handleAmount: () => {},
});

//Creating provider
export function PaymentProvider({ children }: PaymentProviderProps) {
    const [enablePayment, setEnablePayment] = useState<Boolean>(false);
    const [enableFinalPayment, setEnableFinalPayment] = useState<Boolean>(false);
    const [amount, setAmount] = useState<number>(0);
    const handleEnablePayment = () => {
        setEnablePayment(true);
        
    }

    const handleFinalPayment = () => {
        setEnableFinalPayment(true);
    }

    const handleAmount = (value: number) => {
        setAmount(value);
    }

  return (
    <PaymentContext.Provider
      value={{
        enablePayment,
        enableFinalPayment,
        handleEnablePayment,
        handleFinalPayment,
        handleAmount,
        amount,
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
}
