import { AiOutlineCheckCircle } from "react-icons/ai";

function TransactionPage() {
  return (
    <div className="w-2/4 m-auto max-w-screen-xl">
      <div className="border border-gray-100 p-10 rounded-lg flex flex-col gap-3">
        <AiOutlineCheckCircle className="text-6xl text-green-500 m-auto" />
        <p className="mb-5 text-lg text-center">Thanks for your order!</p>
      </div>
    </div>
  );
}

export default TransactionPage;
