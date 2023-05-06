import { useCart } from "../hooks/useCart";
import { Product } from '../interfaces/Product';

interface CounterButtonProps {
  product: Product | null;
}

function CounterButton ({product} : CounterButtonProps) : JSX.Element {
  const { handleQuantity, cart } = useCart();
  console.log(cart)
    return (
      <div className="custom-number-input flex">
        <div className="flex flex-row h-10 w-32 rounded-lg relative bg-transparent">
          <button
            data-action="decrement"
            className="border text-gray-600 h-full w-20 rounded-l cursor-pointer outline-none"
          >
            <span className="m-auto text-2xl font-thin">−</span>
          </button>
          <input
            type="number"
            className="outline-none border focus:outline-none text-center w-full font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
            name="custom-input-number"
            value="1"
          ></input>
          <button
            data-action="increment"
            onClick={() => handleQuantity(product!, true)}
            className="border text-gray-600 h-full w-20 rounded-r cursor-pointer"
          >
            <span className="m-auto text-2xl font-thin">+</span>
          </button>
        </div>
      </div>
    );
}

export default CounterButton;