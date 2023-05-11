import { useCart } from '../hooks/useCart';
import { CiTrash } from "react-icons/ci";
import { useEffect, useState } from 'react';
import CounterButton from '../components/Counter/CounterButton';
import Invoice from '../components/Invoice/Invoice';

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
          <div className="flex gap-[30%] mb-10">
            <h4 className="text-2xl	font['Inter'] font-extrabold">
              Shopping Cart
            </h4>
            {
              cart.length === 0 ? null : (
                <button
                  onClick={() => clearCart()}
                  className="flex items-center gap-2"
                >
                  <CiTrash />
                  Remove
                </button>
              )
            }
          </div>
          {cart.length === 0 ? (
            <div> Your cart is empty </div>
          ) : (
            <div className='grid grid-cols-10 gap-5'>
              <div className='col-span-6'>
                <div className="grid grid-cols-7 mb-5 gap-6">
                  <h3 className="col-span-3 text-[#555555]">Product</h3>
                  <h3 className="col-span-2 text-[#555555]">Quantity</h3>
                  <h3 className="col-span-2 text-[#555555]">Price</h3>
                </div>
                <div className="border-[0.1rem] border-gray-100 mb-5"></div>
                <div>
                  {cart.map((product) => (
                    <div key={product?.id} className="grid grid-cols-7 gap-6">
                      <div className="flex mb-5 gap-5 col-span-3">
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
                      <div className="flex flex-col gap-5 col-span-2">
                        <CounterButton
                          product={product}
                          valueQuantity={product?.quantity}
                        />
                        <button
                          onClick={() => removeFromCart(product)}
                          className="flex items-center gap-2"
                        >
                          <CiTrash />
                          Remove
                        </button>
                      </div>
                      <div className="flex flex-col gap-5 col-span-2">
                        ${product.price}.00
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <Invoice total={total} payment={false} />
            </div>
          )}
        </div>
    );
}

export default CartPage;