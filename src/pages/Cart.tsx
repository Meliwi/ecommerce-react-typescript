import { useCart } from '../hooks/useCart';
import { CiTrash } from "react-icons/ci";
import { useEffect, useState } from 'react';
import Invoice from '../components/Invoice/Invoice';
import CardCart from '../components/Card/CardCart';
import { BsBagX } from 'react-icons/bs';

function CartPage(){
    const {cart, clearCart} = useCart();
    const [total, setTotal] = useState(0);

    useEffect(() => {
      let total = 0;
      cart.forEach((product) => {
        total += product.price * product.quantity;
      });
      setTotal(total);
    }, [cart])

    return (
      <div className="max-w-screen-xl mx-auto md:px-4">
        <div className="flex gap-[30%] mb-10">
          <h4 className="text-2xl	font['Inter'] font-extrabold">
            Shopping Cart
          </h4>
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
          <div className="flex justify-center items-center flex-col gap-4">
            <h6 className="text-2xl font-semibold">Your cart is empty</h6>
            <p>0 items in the basket</p>
            <BsBagX className="text-9xl text-[#555555]" />
            <p>Nothing to show here right now</p>
          </div>
        ) : (
          <div className="grid grid-cols-10 gap-5">
            <div className="col-span-6">
              <div className="grid grid-cols-7 mb-5 gap-6">
                <h3 className="col-span-3 text-[#555555]">Product</h3>
                <h3 className="col-span-2 text-[#555555]">Quantity</h3>
                <h3 className="col-span-2 text-[#555555]">Price</h3>
              </div>
              <div className="border-[0.1rem] border-gray-100 mb-5"></div>
              <CardCart cartList={cart} isHistory={false} />
            </div>
            <Invoice total={total} payment={false} />
          </div>
        )}
      </div>
    );
}

export default CartPage;