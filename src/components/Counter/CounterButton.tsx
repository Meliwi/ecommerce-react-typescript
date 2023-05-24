import { FormikContextType } from "formik";
import { useCart } from "../../hooks/useCart";
import { CartProduct } from "../../interfaces/CartProduct";
import { useState } from "react";

interface CounterButtonProps {
  product: CartProduct | null;
  valueQuantity: number;
  formik?: FormikContextType<any>;
}

function CounterButton ({product, valueQuantity, formik} : CounterButtonProps) : JSX.Element {
  const {cart, handleQuantityInCart} = useCart();
  const [productQuantity, setProductQuantity] = useState<Number>(valueQuantity);
  /**
   * It is necessary to use the useCart hook to update the cart 
   * @param increment 
   * @returns 
   */
  const handleQuantity = (increment: boolean) => {
    if (product?.productInCart) {
      setProductQuantity(handleQuantityInCart(product, cart, increment));
    }
    if(increment && !product?.productInCart){
      const newQuantity = Math.min(
        formik?.values.product.stock,
        formik?.values.product.quantity + 1,
      );
      formik?.setFieldValue("product.quantity", newQuantity);
      return;
    }
    else {
      const newQuantity = Math.max(1, formik?.values.product.quantity - 1);
      formik?.setFieldValue("product.quantity", newQuantity);
    }
  }
    return (
      <div className="custom-number-input flex">
        <div className="flex flex-row h-10 w-32 rounded-lg relative bg-transparent">
          <button
            type="button"
            data-action="decrement"
            onClick={() => handleQuantity(false)}
            className="border text-gray-600 h-full w-20 rounded-l cursor-pointer outline-none"
          >
            <span className="m-auto text-2xl font-thin">−</span>
          </button>
          <input
            type="number"
            className="outline-none border focus:outline-none text-center w-full font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
            name="custom-input-number"
            readOnly
            value={product?.productInCart ? productQuantity : formik?.values.product.quantity}
          ></input>
          <button
            type="button"
            data-action="increment"
            onClick={() => handleQuantity(true)}
            className="border text-gray-600 h-full w-20 rounded-r cursor-pointer"
          >
            <span className="m-auto text-2xl font-thin">+</span>
          </button>
        </div>
      </div>
    );
}

export default CounterButton;