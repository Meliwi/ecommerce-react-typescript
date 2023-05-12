import { NavLink, json } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { selectEnablePayment } from "../../reducers/paymentSlice";
import { useCart } from "../../hooks/useCart";
import { updateProductStock } from "../../reducers/productSlice";
import { useRecoilState } from "recoil";
import { shoppingHistoryState } from "../../atoms";
import { useLocation } from "react-router-dom";

interface InvoiceProps {
  total: number;
  payment: boolean;
}

function Invoice({total, payment}: InvoiceProps) : JSX.Element {
    const enableButtonPayment = useSelector(selectEnablePayment);
    const { cart } = useCart();
    const dispatch = useDispatch();
    const [shoppingHistory, setShoppingHistory]= useRecoilState(shoppingHistoryState);
    
    const handleClick = () => {
      if(enableButtonPayment) {
        dispatch(updateProductStock(cart));
        console.log(location.pathname)
        if (location.pathname === "/payment") {
          setShoppingHistory([...shoppingHistory, ...cart]);
        }
      }
    }
    return (
      <div className="col-span-3">
        <div className="w-full border border-gray-100 p-7 rounded-lg gap-4 flex flex-col">
          <div className="flex justify-between">
            <p className="text-[#555555]">Subtotal:</p>
            <p className="text-[#555555]">${total}.00</p>
          </div>
          <div className="flex justify-between">
            <p className="text-[#555555]">Discount:</p>
            <p className="text-[#555555]">$00.00</p>
          </div>
          <div className="border-[0.1rem] border-dashed border-gray-100 mb-5"></div>
          <div className="flex justify-between">
            <p className="text-[#555555]">Total:</p>
            <p className="text-[#555555]">${total}.00</p>
          </div>
          <div className="flex w-full">
            <NavLink
              to={
                payment
                  ? enableButtonPayment
                    ? "/payment"
                    : "/pay"
                  : "/checkout"
              }
              className="flex w-full"
            >
              {payment ? (
                <button
                  disabled={!enableButtonPayment}
                  onClick={handleClick}
                  className="flex items-center justify-center text-center bg-black text-white rounded-md px-3 mt-3 h-10 gap-2 w-full"
                  style={{ opacity: enableButtonPayment ? "1" : "0.5" }}
                >
                  {enableButtonPayment ? `Pay $${total}` : "Continue Payment"}
                </button>
              ) : (
                <button className="flex items-center justify-center text-center bg-black text-white rounded-md px-3 mt-3 h-10 gap-2 w-full">
                  Checkout now
                </button>
              )}
            </NavLink>
          </div>
        </div>
      </div>
    );
}

export default Invoice;