import { ReactNode, createContext, useState } from "react";
import { ProductQuantity } from '../interfaces/ProductQuantity';
import { CartProduct } from '../interfaces/CartProduct';

interface CartContextType {
  cart: CartProduct[];
  productQuantities: ProductQuantity[];
  findProductQuantity: (productId: number | undefined) => number;
  addToCart: (product: CartProduct | null) => void;
  clearCart: () => void;
  removeFromCart: (product: CartProduct) => void;
  handleQuantity: (product: CartProduct, increment: Boolean) => void;
  handleQuantityInCart: (product: CartProduct, increment: Boolean) => void;
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
  handleQuantityInCart: () => {},
});

//Creating provider
export function CartProvider({children}: CartProviderProps) {
    const [cart, setCart] = useState<CartProduct[]>([]);
    const [productQuantities, setProductQuantities] = useState<ProductQuantity[]>([]);

    /**
     * It checks if product is in cart and update cart state
     * @param product element to increment or decrement quantity
     * @param increment boolean to increment or decrement
     */
      const handleQuantityInCart = (
        product: CartProduct,
        increment: Boolean
      ) => {
        const productId = product.id;
        if (product?.productInCart) {
          const productIndex = cart.findIndex((item) => item.id === productId);
          const maxQuantity = product.stock;
          const currentQuantity = cart[productIndex].quantity;
          const newQuantity = increment
            ? Math.min(maxQuantity, currentQuantity + 1)
            : Math.max(1, currentQuantity - 1);
          const updatedCart = structuredClone(cart);
          updatedCart[productIndex].quantity = newQuantity;
          setCart(updatedCart);
        }
      };

    /**
     * It handles the quantity of a product in the cart
     * @param product element to increment or decrement quantity
     * @param increment boolean to increment or decrement
     */
    const handleQuantity = (product: CartProduct, increment: Boolean) => {
      const productId = product.id;
      const maxQuantity = product.stock;
      const productIndex = productQuantities.findIndex((item) => item.productId === productId);
      if(product?.productInCart) {
        handleQuantityInCart(product, increment);
      } else {
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
    }

    /**
     * It finds the quantity of a product
     * @param productId product id to find quantity
     * @returns quantity of the product
     */
    const findProductQuantity = (productId: number | undefined) => {
      const product = productQuantities.find(
        (item) => item.productId === productId
      );
      return product ? product.quantity : 1;
    };

    /**
     * It adds a product to cart
     * @param product element to add to cart
     */
    const addToCart = (product: CartProduct | null) => {
      // check if product is already in cart
      const productIndex = cart?.findIndex((item) => item.id === product?.id);
      const quantityProduct = findProductQuantity(product?.id);
      const newCart = structuredClone(cart);

      // product is already in cart
      if (productIndex !== -1) {
        newCart[productIndex] = {
          ...newCart[productIndex],
          productInCart: true,
        };
        setCart(newCart);
      }
      // product is not in cart
      else {
        const updatedProduct = {
          ...product!,
          quantity: quantityProduct,
          productInCart: true,
        };
        setCart((prevState) => [...prevState, updatedProduct]);
      }
    };
    /**
     * It clears the cart
     */
    const clearCart = () => {setCart([])}

    /**
     * It removes a product from cart
     * @param product to remove from cart
     */
    const removeFromCart = (product: CartProduct) => {
      setCart((prevState) => 
        prevState.filter(item => item.id !== product.id) 
       )
    } 
    return (
        <CartContext.Provider value={{cart, productQuantities, findProductQuantity, addToCart, handleQuantityInCart, clearCart, removeFromCart, handleQuantity}}>
            {children}
        </CartContext.Provider>
    )
}
