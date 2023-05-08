import { ReactNode, createContext, useState } from "react";
import { Product } from '../interfaces/Product';
import { ProductQuantity } from "../interfaces/ProductQuantity";

interface CartContextType {
  cart: Product[];
  productQuantities: ProductQuantity[];
  findProductQuantity: (productId: number | undefined) => number;
  addToCart: (product: Product | null) => void;
  clearCart: () => void;
  removeFromCart: (product: Product) => void;
  handleQuantity: (product: Product, increment: Boolean) => void;
}

interface CartProviderProps {
  children: ReactNode;
}

//Creating context
export const CartContext = createContext<CartContextType>({
  cart: [],
  productQuantities: [],
  findProductQuantity: () => 1,
  addToCart: () => {},
  clearCart: () => {},
  removeFromCart: () => {},
  handleQuantity: () => {},
});

//Creating provider
export function CartProvider({children}: CartProviderProps) {
    const [cart, setCart] = useState<Product[]>([]);
    const [productQuantities, setProductQuantities] = useState<ProductQuantity[]>([]);
    /**
     * It handles the quantity of a product in the cart
     * @param product element to increment or decrement quantity
     * @param increment boolean to increment or decrement
     */
    const handleQuantity = (product: Product, increment: Boolean) => {
      const productId = product.id;
      const maxQuantity = product.stock;
      const productIndex = productQuantities.findIndex((item) => item.productId === productId);
      if (productIndex == -1) {
          setProductQuantities((prevState) => [
            ...prevState,
            {
              productId: productId,
              quantity: increment
                ? Math.min(maxQuantity, product.quantity + 1)
                : Math.max(1, product.quantity - 1),
            },
          ]);
        }
      else {
        const updatedProductQuantities = structuredClone(productQuantities);
        const currentQuantity = updatedProductQuantities[productIndex].quantity;
        const newQuantity = increment
          ? Math.min(maxQuantity, currentQuantity + 1)
          : Math.max(1, currentQuantity - 1);
        updatedProductQuantities[productIndex].quantity = newQuantity;
        setProductQuantities(updatedProductQuantities);
      }
    }

    const findProductQuantity = (productId: number | undefined) => {
      const product = productQuantities.find(
        (item) => item.productId === productId
      );
      return product ? product.quantity : 1;
    };


    const addToCart = (product: Product | null) => {
      //check if product is already in cart
      const productIndex = cart?.findIndex((item) => item.id === product?.id);
      const quantityProduct = findProductQuantity(product?.id);
      const newCart = structuredClone(cart);
      if (productIndex !== -1) {
        setCart(newCart);
      }
      // product is not in cart
      else {
        setCart((prevState) => [
          ...prevState,
          {
            ...product!,
            quantity: quantityProduct,
          },
        ]);
      }
    }; 
    const clearCart = () => {setCart([])}

    const removeFromCart = (product: Product) => {
      setCart((prevState) => 
        prevState.filter(item => item.id !== product.id) 
       )
    } 
    return (
        <CartContext.Provider value={{cart, productQuantities, findProductQuantity, addToCart, clearCart, removeFromCart, handleQuantity}}>
            {children}
        </CartContext.Provider>
    )
}
