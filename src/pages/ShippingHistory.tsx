import { useRecoilValue } from "recoil";
import { shoppingHistoryState } from "../atoms";
import CardCart from '../components/Card/CardCart';

function ShippingHistory(){
    const shoppingHistory = useRecoilValue(shoppingHistoryState);

    return (
      <div className="grid grid-cols-10 gap-5 max-w-screen-xl mx-auto md:px-4">
        <div className="col-span-6">
          <h6 className="text-2xl font['Inter'] font-extrabold mb-10">
            Shipping History
          </h6>
          <CardCart cartList={shoppingHistory} isHistory={true} />
        </div>
      </div>
    );
}

export default ShippingHistory;