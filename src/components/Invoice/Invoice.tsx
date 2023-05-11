import { NavLink } from "react-router-dom";

interface InvoiceProps {
  total: number;
  payment: boolean;
}

function Invoice({total, payment}: InvoiceProps) : JSX.Element {
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
              to={payment ? "/checkout" : "/checkout"}
              className="flex w-full"
            >
              {payment ? (
                <button className="flex items-center justify-center text-center bg-black text-white rounded-md px-3 mt-3 h-10 gap-2 w-full">
                  Continue to payment
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