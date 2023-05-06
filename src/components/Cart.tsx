import {AiOutlineShoppingCart} from 'react-icons/ai';
import { useCart } from '../hooks/useCart';

export function Cart() : JSX.Element {
    const { cart } = useCart();

    return (
      <button className="flex">
        <AiOutlineShoppingCart className="text-2xl" />
        <span className="bg-red-300 rounded-full w-4 h-4 text-xs text-center transform translate-x-[-10px] translate-y-[-5px]">
          {cart.length}
        </span>
      </button>
    );
}