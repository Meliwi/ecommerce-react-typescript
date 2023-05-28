import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCart } from "../../hooks/useCart";
import { useEffect, useState } from "react";

export function Cart(): JSX.Element {
  const { cart } = useCart();
  const [productsInCart, setProductsInCart] = useState<number>(0);
  const [animateCart, setAnimateCart] = useState<boolean>(false);

  
  useEffect(() => {
    const quantitySum = cart.reduce(
      (total, product) => total + product.quantity,
      0
    );
    setProductsInCart(quantitySum);
      if (quantitySum > productsInCart) {
        setAnimateCart(true);
        setTimeout(() => {
          setAnimateCart(false);
        }, 1000); // Adjust the duration of the animation as needed
      }
  }, [cart, cart.map((product) => product.quantity)]);

  return (
    <button className={`flex ${animateCart ? "animate-bounce" : ""}`}>
      <AiOutlineShoppingCart className="text-2xl" />
      <span className="bg-red-300 rounded-full w-4 h-4 text-xs text-center transform translate-x-[-10px] translate-y-[-5px]">
        {productsInCart}
      </span>
    </button>
  );
}
