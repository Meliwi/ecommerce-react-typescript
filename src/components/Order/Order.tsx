import { useCart } from "../../hooks/useCart";
import CardCart from "../Card/CardCart";

function Order() {
    const { cart } = useCart();
    return (
      <div className="border border-gray-100 p-7 rounded-lg">
        <h6 className="mb-2">Your Order</h6>
        <CardCart isOrder={true} cartList={cart} />
      </div>
    );
}

export default Order;