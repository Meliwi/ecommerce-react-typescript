import Invoice from "../components/Invoice/Invoice";
import Payment from "../components/Payment/Payment";

function PaymentPage() {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-5 max-w-screen-xl mx-6 md:px-4">
        <div className="col-span-6 border border-gray-100 p-10 rounded-lg">
          <h6 className="mb-5 font-bold text-lg">Payment Method</h6>
          <Payment />
        </div>
        <div className="col-span-6 lg:col-span-4">
          <Invoice payment={true} />
        </div>
      </div>
    );
}   


export default PaymentPage;