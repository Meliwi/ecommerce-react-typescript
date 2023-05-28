import { useEffect, useState } from "react";
import Invoice from "../components/Invoice/Invoice";
import Payment from "../components/Payment/Payment";

function PaymentPage() {
    const [isContentLoaded, setIsContentLoaded] = useState(false);

    useEffect(() => {
      setTimeout(() => {
        setIsContentLoaded(true);
      }, 300);
    }, []);

    return (
      <div
        className={`transition-opacity duration-500 max-w-screen-xl mx-auto md:px-4 p-8 ${
          isContentLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-5">
          <div className="col-span-6 border border-gray-100 p-10 rounded-lg">
            <h6 className="mb-5 font-bold text-lg">Payment Method</h6>
            <Payment />
          </div>
          <div className="col-span-6 lg:col-span-4">
            <Invoice payment={true} />
          </div>
        </div>
      </div>
    );
}   


export default PaymentPage;