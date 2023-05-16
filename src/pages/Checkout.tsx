import Checkout from "../components/Checkout/Checkout";
import Invoice from '../components/Invoice/Invoice';

function CheckoutPage(): JSX.Element {
    return (
      <div className="grid grid-cols-10 gap-5 max-w-screen-xl mx-auto md:px-4">
        <div className="col-span-6 border border-gray-100 p-10 rounded-lg">
          <h6 className="mb-5 font-bold text-lg">Shipping address</h6>
          <Checkout />
        </div>
        <Invoice total={200} payment={true} />
      </div>
    );
}

export default CheckoutPage;