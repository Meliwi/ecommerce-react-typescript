import { ReactNode, createContext, useState } from "react";
import { Product } from '../interfaces/Product';

interface CartContextType {
  cart: Product[];
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
  addToCart: () => {},
  clearCart: () => {},
  removeFromCart: () => {},
  handleQuantity: () => {},
});

//Creating provider
export function CartProvider({children}: CartProviderProps) {
    const [cart, setCart] = useState<Product[]>([]);
    
    const handleQuantity = (product: Product, increment: Boolean) => {
      const newCart = structuredClone(cart);
      const productIndex = newCart.findIndex((item: Product) => item.id === product?.id);
      if (increment) {
        newCart[productIndex].quantity += product.quantity;
        console.log(newCart[productIndex].quantity)
        setCart(newCart);
      }
      else {
        newCart[productIndex].quantity -= product.quantity;
        setCart(newCart);
      }
    }

    const addToCart = (product: Product | null) => {
      //check if product is already in cart
      const productInCart = cart.findIndex((item) => item.id === product?.id);
      if (productInCart !== -1) {
        handleQuantity(product!, true);
      }
      // product is not in cart
      else {
        setCart((prevState) => [
          ...prevState,
          {
            ...product!,
            quantity: 1,
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
        <CartContext.Provider value={{cart, addToCart, clearCart, removeFromCart, handleQuantity}}>
            {children}
        </CartContext.Provider>
    )
}
