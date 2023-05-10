export interface CartProduct {
  id: number;
  title: string;
  color: string;
  size: string;
  price: number;
  quantity: number;
  stock: number;
  image: string;
  productInCart: boolean;
}
