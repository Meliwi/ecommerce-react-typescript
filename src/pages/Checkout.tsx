import Checkout from "../components/Checkout/Checkout";
import Invoice from '../components/Invoice/Invoice';
import Order from "../components/Order/Order";

function CheckoutPage(): JSX.Element {
    return (
      <div className="grid grid-cols-10 gap-5 max-w-screen-xl mx-auto md:px-4">
        <div className="col-span-6 border border-gray-100 p-10 rounded-lg">
          <h6 className="mb-5 font-bold text-lg">Shipping address</h6>
          <Checkout />
        </div>
        <div className="col-span-4">
          <Order />
          <Invoice payment={true} />
        </div>
      </div>
    );
}

export default CheckoutPage;