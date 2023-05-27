import { CiTrash } from "react-icons/ci";
import { CartProduct } from "../../interfaces/CartProduct";
import CounterButton from "../Counter/CounterButton";
import { useCart } from "../../hooks/useCart";
import { useEffect, useState } from "react";

interface CardCartProps {
  cartList: CartProduct[];
  isOrder: boolean;
}
function CardCart({cartList, isOrder}: CardCartProps){
    const { removeFromCart } = useCart();
    const [windowSize, setWindowSize] = useState(window.innerWidth);
    useEffect(() => {
      const handleResize = () => {
        setWindowSize(window.innerWidth);
      };
      window.addEventListener("resize", handleResize);
      // Clean up the event listener
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, [])
    const showSizeWord = windowSize >= 1200; 
    return (
      <div>
        {cartList?.map((product, index) => (
          <div
            key={index}
            className="grid grid-cols-10 md:grid-cols-7 gap-8 md:gap-6"
          >
            <div
              className={`flex flex-col md:flex-row mb-5 gap-5 ${
                isOrder
                  ? "col-span-3 md:col-span-4 lg:col-span-3"
                  : "col-span-4 sm:col-span-3"
              }`}
            >
              <img
                className={
                  isOrder
                    ? "h-[8rem] max-h-32 max-w-[6rem] w-auto h-auto rounded-md"
                    : "w-[6rem] rounded-md"
                }
                src={product?.image}
              />
              <div className="flex flex-col gap-5">
                <h6 className="font-medium">{product?.title}</h6>
                <div className="flex items-center gap-4 md:gap-5">
                  <span
                    className="w-8 h-8 rounded-full border border-gray-200"
                    style={{ backgroundColor: product?.color }}
                  ></span>
                  <p className={isOrder ? "" : "text-[#555555]"}>
                    {showSizeWord ? `Size: ${product.size}` : product.size}
                  </p>
                </div>
              </div>
            </div>
            <div
              className={
                isOrder
                  ? "sm:col-span-1 col-span-2 text-center"
                  : "flex flex-col col-span-3 md:col-span-2 gap-5"
              }
            >
              {isOrder ? (
                <p className="text-[#555555]">x {product?.quantity}</p>
              ) : (
                <>
                  <CounterButton
                    product={product}
                    valueQuantity={product?.quantity}
                  />
                  <button
                    onClick={() => removeFromCart(product)}
                    className="flex items-center gap-2"
                  >
                    <CiTrash />
                    Remove
                  </button>
                </>
              )}
            </div>
            <div className="flex flex-col gap-5 col-span-2">
              ${product.price}.00
            </div>
          </div>
        ))}
      </div>
    );
}

export default CardCart;