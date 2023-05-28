import { AiOutlineCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

function TransactionPage() {
  return (
    <div className="w-2/4 m-auto max-w-screen-xl">
      <div className="border border-gray-100 p-10 rounded-lg flex flex-col gap-3">
        <AiOutlineCheckCircle className="text-6xl text-green-500 m-auto" />
        <p className="mb-5 text-lg text-center">Thanks for your order!</p>
        <Link to="/products" className="text-center">
          <button className="bg-black text-white rounded-md px-3 mt-3 h-10 gap-2 w-full sm:w-2/4 text-sm">
            Get back to shopping
          </button>
        </Link>
      </div>
    </div>
  );
}

export default TransactionPage;
