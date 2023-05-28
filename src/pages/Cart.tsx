import { useCart } from '../hooks/useCart';
import { CiTrash } from "react-icons/ci";
import { useEffect, useState } from 'react';
import Invoice from '../components/Invoice/Invoice';
import CardCart from '../components/Card/CardCart';
import { BsBagX } from 'react-icons/bs';
import { usePayment } from '../hooks/usePayment';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';

function CartPage(){
    const {cart, clearCart} = useCart();
    const { handleAmount } = usePayment();
    const [isContentLoaded, setIsContentLoaded] = useState(false);

    useEffect(() => {
      let total = 0;
      cart.forEach((product) => {
        total += product.price * product.quantity;
      });
      handleAmount(total);
      setTimeout(() => {
        setIsContentLoaded(true);
      }, 300);
    }, [cart, cart.map((product) => product.quantity)]);


    return (
      <>
        {cart.length === 0 ? null : <Breadcrumb />}
        <div
          className={`transition-opacity duration-500 max-w-screen-xl mx-auto md:px-4 p-8 ${
            isContentLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-row justify-between md:justify-start md:gap-[30%] mb-10">
            <h4 className="text-2xl font-extrabold">Shopping Cart</h4>
            {cart.length === 0 ? null : (
              <button
                onClick={() => clearCart()}
                className="flex items-center gap-2"
              >
                <CiTrash />
                Remove
              </button>
            )}
          </div>
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-4">
              <h6 className="text-2xl font-semibold">Your cart is empty</h6>
              <p>0 items in the basket</p>
              <BsBagX className="text-9xl text-[#555555]" />
              <p>Nothing to show here right now</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-10 gap-5">
              <div className="col-span-1 text-center md:col-span-6 md:text-start">
                <div className="grid grid-cols-10 sm:grid-cols-7 mb-5 gap-8 md:gap-6">
                  <h3 className="col-span-4 sm:col-span-2 md:col-span-3 text-[#555555]">
                    Product
                  </h3>
                  <h3 className="col-span-2 sm:col-span-2 text-[#555555]">
                    Quantity
                  </h3>
                  <h3 className="col-span-4 sm:col-span-2 text-[#555555]">
                    Price
                  </h3>
                </div>
                <div className="border-[0.1rem] border-gray-100 mb-5"></div>
                <CardCart cartList={cart} isOrder={false} />
              </div>
              <Invoice payment={false} />
            </div>
          )}
        </div>
      </>
    );
}

export default CartPage;