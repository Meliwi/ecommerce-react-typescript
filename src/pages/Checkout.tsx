import Checkout from "../components/Checkout/Checkout";
import Invoice from "../components/Invoice/Invoice";
import Order from "../components/Order/Order";

function CheckoutPage(): JSX.Element {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-screen-xl mx-auto px-4">
      <div className="md:col-span-1 border border-gray-100 p-10 rounded-lg">
        <h6 className="mb-5 font-bold text-lg">Shipping address</h6>
        <Checkout />
      </div>
      <div className="md:col-span-1">
        <div className="flex flex-col gap-5">
          <Order />
          <Invoice payment={true} />
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
