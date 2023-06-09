import { ReactNode, createContext, useState } from "react";
import { CartProduct } from '../interfaces/CartProduct';

interface CartContextType {
  cart: CartProduct[];
  addToCart: (product: CartProduct | null) => void;
  handleQuantityInCart: (product: CartProduct, cart: CartProduct[], increment: Boolean) => number;
  clearCart: () => void;
  productQuantity: number;
  removeFromCart: (index: number) => void;
}

interface CartProviderProps {
  children: ReactNode;
}

//Creating context
export const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  handleQuantityInCart: () => 0,
  clearCart: () => {},
  productQuantity: 0,
  removeFromCart: () => {},
});

//Creating provider
export function CartProvider({children}: CartProviderProps) {
    const [cart, setCart] = useState<CartProduct[]>([]);
    const [productQuantity, setProductQuantity] = useState<number>(1);
    /**
     * It adds a product to cart
     * @param product element to add to cart
     */
    const addToCart = (product: CartProduct | null) => {
      // check if product is already in cart
      const productCartIndex = cart?.findIndex((item) => item.id === product?.id);
      const newCart = structuredClone(cart);
       if (productCartIndex !== -1) {
        newCart[productCartIndex] = {
          ...newCart[productCartIndex],
          productInCart: true,
        };
        setCart(newCart);
      }
      // product is not in cart
      const updatedProduct = {
        ...product!,
        productInCart: true,
      };
      setCart((prevState) => [...prevState, updatedProduct]);
    };
    
    /**
     * Handle quantity of a product in cart
     * @param product 
     * @param cart 
     * @returns number
     */
    const handleQuantityInCart = (product: CartProduct, cart: CartProduct[], increment: Boolean) => {
      const productIndex = cart.findIndex((p) => p.id === product.id);
      if (productIndex !== -1) {
        const currentQuantity = cart[productIndex].quantity;
        const newQuantity = increment
          ? currentQuantity + 1
          : Math.max(currentQuantity - 1, 1);
        const maxStock = product.stock;

        if (newQuantity <= maxStock) {
          cart[productIndex].quantity = newQuantity;
          setProductQuantity(newQuantity);
          return newQuantity;
        } else {
          // Handle the case when the quantity exceeds the product's stock
          // You can show an error message or take appropriate action here
          return currentQuantity;
        }
      }
      return 0; // or handle the case when the product is not found in the cart
    };
    /**
     * It clears the cart
     */
    const clearCart = () => {setCart([])}

    /**
     * It removes a product from cart
     * @param product to remove from cart
     */
    const removeFromCart = (index: number) => {
      setCart((prevState) => {
        const updatedCart = [...prevState];
        updatedCart.splice(index, 1);
        return updatedCart;
      });
    };

    return (
        <CartContext.Provider value={{cart, addToCart, handleQuantityInCart, productQuantity, clearCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}
