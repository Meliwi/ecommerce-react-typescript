import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useCart } from "../../hooks/useCart";
import { selectProducts, updateProductStock } from "../../reducers/productSlice";
import { useRecoilState } from "recoil";
import { shoppingHistoryState } from "../../atoms";
import { updateProductStockJSON } from "../../utilities/productsAxios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePayment } from "../../hooks/usePayment";
interface InvoiceProps {
  payment: boolean;
}

function Invoice({payment}: InvoiceProps) : JSX.Element {
    const navigate = useNavigate();
    const {enablePayment, amount, enableFinalPayment} = usePayment();
    console.log(enablePayment, amount, enableFinalPayment)
    const { cart, clearCart } = useCart();
    const dispatch = useDispatch();
    const updatedProducts = useSelector(selectProducts)
    const [enableUpdateAPI, setEnableUpdateAPI] = useState(false)
    const [shoppingHistory, setShoppingHistory]= useRecoilState(shoppingHistoryState);
    
    const handleClick = async () => {
      if (enablePayment && location.pathname === "/payment") {
        dispatch(updateProductStock(cart));
        // Generate unique ID for shopping history
        const shoppingID = `shopping${Object.keys(shoppingHistory).length + 1}`;
        // Create shopping object
        const shoppingObject = {
          cart,
        };
        setShoppingHistory((prevShippingHistory) => ({
          ...prevShippingHistory,
          [shoppingID]: shoppingObject,
        }));
        setEnableUpdateAPI(true);
        clearCart();
      }
    };

    useEffect(() => {
      const handleUpdateStockAPI = async () => {
        try {
          navigate("/transaction");
          await updateProductStockJSON(updatedProducts);
        } catch (error) {
          throw error;
        }
      }
      if(enableUpdateAPI){
        handleUpdateStockAPI();
      }
    },[enableUpdateAPI])

    return (
      <div className="col-span-4">
        <div className="w-full border border-gray-100 p-7 rounded-lg gap-4 flex flex-col">
          <div className="flex justify-between">
            <p className="text-[#555555]">Subtotal:</p>
            <p className="text-[#555555]">${amount}.00</p>
          </div>
          <div className="flex justify-between">
            <p className="text-[#555555]">Discount:</p>
            <p className="text-[#555555]">$00.00</p>
          </div>
          <div className="border-[0.1rem] border-dashed border-gray-100 mb-5"></div>
          <div className="flex justify-between">
            <p className="text-[#555555]">Total:</p>
            <p className="text-[#555555]">${amount}.00</p>
          </div>
          <div className="flex w-full">
            <NavLink
              to={payment ? (enablePayment ? "/payment" : "/pay") : "/checkout"}
              className="flex w-full"
            >
              {payment ? (
                <button
                  disabled={!enablePayment && !enableFinalPayment}
                  onClick={handleClick}
                  className="flex items-center justify-center text-center bg-black text-white rounded-md px-3 mt-3 h-10 gap-2 w-full"
                  style={{
                    opacity: enablePayment ? "1" : "0.5", 
                  }}
                >
                  {enablePayment ? `Pay $${amount}` : "Continue Payment"}
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