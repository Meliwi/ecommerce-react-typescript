import { useRecoilValue } from "recoil";
import { shoppingHistoryState } from "../atoms";
import CardCart from '../components/Card/CardCart';
import { useEffect, useState } from "react";
import { CartProduct } from "../interfaces/CartProduct";
import { BsBagX } from "react-icons/bs";

function ShoppingHistory(){
    const shoppingHistory = useRecoilValue(shoppingHistoryState);
    const [cartList, setCartList] = useState<CartProduct[][]>([]);
    const [isContentLoaded, setIsContentLoaded] = useState(false);

    useEffect(() => {
      const newCart: CartProduct[][] = [];
      Object.keys(shoppingHistory).forEach((key: string) => {
        const shopping = shoppingHistory[key];
        newCart.push(shopping.cart);
      });
      setCartList(newCart);
      setTimeout(() => {
        setIsContentLoaded(true);
      }, 300);
    }, [shoppingHistory]);

    return (
      <div
        className={`transition-opacity duration-500 grid grid-cols-10 gap-5 max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12 ${
          isContentLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className={`col-span-10 md:col-span-6 ${
            cartList.length === 0 ? "md:col-span-10" : ""
          }`}
        >
          <h6 className="text-2xl font-inter font-extrabold mb-10">
            Shopping History
          </h6>
          {cartList.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-4">
              <h6 className="text-2xl font-semibold">
                Buy something to see the history
              </h6>
              <p>0 items in the history</p>
              <BsBagX className="text-9xl text-[#555555]" />
              <p>Nothing to show here right now</p>
            </div>
          ) : (
            cartList.map((cart, index) => (
              <div key={index} className="mb-6">
                <p className="pb-2 text-gray-500">{`Shopping ${index + 1}`}</p>
                <div className="border border-gray-100 rounded-lg p-4 md:p-6">
                  <CardCart cartList={cart} isOrder={true} />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    );
}

export default ShoppingHistory;