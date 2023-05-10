import { useCart } from '../hooks/useCart';
import { CiTrash } from "react-icons/ci";
import CounterButton from '../components/Counter/CounterButton';
import { useEffect, useState } from 'react';

function CartPage(){
    const {cart, removeFromCart, clearCart} = useCart();
    const [total, setTotal] = useState(0);

    useEffect(() => {
      let total = 0;
      cart.forEach((product) => {
        total += product.price * product.quantity;
      });
      setTotal(total);
    }, [cart])

    return (
        <div>
          <div className="flex justify-between">
            <h4 className="text-2xl	font['Inter'] font-extrabold mb-10">
              Shopping Cart
            </h4>
            <button
              onClick={() => clearCart()}
              className="flex items-center gap-2"
            >
              Remove
              <CiTrash />
            </button>
          </div>
          {cart.length === 0 ? (
            <div> Your cart is empty </div>
          ) : (
            <div className='flex gap-4'>
              <div>
                <div className="grid grid-cols-3 mb-5 gap-6">
                  <h3 className="text-[#555555]">Product</h3>
                  <h3 className="text-[#555555]">Quantity</h3>
                  <h3 className="text-[#555555]">Price</h3>
                </div>
                <div className="border-[0.1rem] border-gray-100 mb-5"></div>
                <div>
                  {cart.map((product) => (
                    <div key={product?.id} className="grid grid-cols-3 gap-6">
                      <div className="flex mb-5 gap-5">
                        <img
                          className="w-[6rem] rounded-md"
                          src={product?.image}
                        />
                        <div className="flex flex-col gap-5">
                          <h6 className="font-medium">{product?.title}</h6>
                          <div className="flex items-center gap-5">
                            <span
                              className="w-8 h-8 rounded-full border border-gray-200"
                              style={{ backgroundColor: product?.color }}
                            ></span>
                            <p className="text-[#555555]">
                              Size: {product.size}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-5">
                        <CounterButton
                          product={product}
                          valueQuantity={product?.quantity}
                        />
                        <button
                          onClick={() => removeFromCart(product)}
                          className="flex items-center gap-2"
                        >
                          Remove
                          <CiTrash />
                        </button>
                      </div>
                      <div className="flex flex-col gap-5">
                        ${product.price}.00
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-1/4 border border-gray-100 p-7 rounded-lg gap-4 flex flex-col">
                <div className="flex justify-between">
                  <p className="text-[#555555]">Subtotal:</p>
                  <p className="text-[#555555]">${total}</p>
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
                <button className="flex items-center justify-center text-center bg-black text-white rounded-md px-3 mt-3 h-10 gap-2 w-100">
                  Checkout now
                </button>
              </div>
            </div>
          )}
        </div>
    );
}

export default CartPage;