import { CiTrash } from "react-icons/ci";
import { CartProduct } from "../../interfaces/CartProduct";
import CounterButton from "../Counter/CounterButton";
import { useCart } from "../../hooks/useCart";

interface CardCartProps {
    cartList: CartProduct[];
    isHistory: boolean;
}
function CardCart({cartList, isHistory}: CardCartProps){
    const { removeFromCart } = useCart();
    return (
      <div>
        {cartList?.map((product, index) => (
          <div key={index} className="grid grid-cols-7 gap-6">
            <div className="flex mb-5 gap-5 col-span-3">
              <img className="w-[6rem] rounded-md" src={product?.image} />
              <div className="flex flex-col gap-5">
                <h6 className="font-medium">{product?.title}</h6>
                <div className="flex items-center gap-5">
                  <span
                    className="w-8 h-8 rounded-full border border-gray-200"
                    style={{ backgroundColor: product?.color }}
                  ></span>
                  <p className="text-[#555555]">Size: {product.size}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 col-span-2">
              {isHistory ? (
                <p className="text-[#555555]">Quantity: {product?.quantity}</p>
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