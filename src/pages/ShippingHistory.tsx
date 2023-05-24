import { useRecoilValue } from "recoil";
import { shoppingHistoryState } from "../atoms";
import CardCart from '../components/Card/CardCart';
import { useEffect, useState } from "react";
import { CartProduct } from "../interfaces/CartProduct";

function ShoppingHistory(){
    const shoppingHistory = useRecoilValue(shoppingHistoryState);
    const [cartList, setCartList] = useState<CartProduct[][]>([]);
    useEffect(() => {
      const newCart: CartProduct[][] = [];
      Object.keys(shoppingHistory).forEach((key: string) => {
        const shopping = shoppingHistory[key];
        newCart.push(shopping.cart);
      });
      setCartList(newCart);
      console.log(cartList);
    }, [shoppingHistory]);

    return (
      <div className="grid grid-cols-10 gap-5 max-w-screen-xl mx-auto md:px-4">
        <div className="col-span-6">
          <h6 className="text-2xl font['Inter'] font-extrabold mb-10">
            Shopping History
          </h6>
          {cartList.map((cart, index) => (
            <>
              <p className="pb-4 text-gray-500">{`Shopping ${index + 1}`}</p>
              <div className="border border-gray-100 p-7 rounded-lg p-2 mb-3">
                <CardCart key={index} cartList={cart} isOrder={true} />
              </div>
            </>
          ))}
        </div>
      </div>
    );
}

export default ShoppingHistory;