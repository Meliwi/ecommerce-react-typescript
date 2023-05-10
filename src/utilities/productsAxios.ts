import axios from "axios";
import { Product } from "../interfaces/Product";
import { CartProduct } from "../interfaces/CartProduct";

const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get("http://localhost:3000/products");
    return response.data;
  } catch (error: any) {
    throw new Error("Error getting products: " + error.message);
  }
};

const getProductDetail = async (id: string): Promise<Product> => {
  try {
    const response = await axios.get(`http://localhost:3000/products/${id}`);
    return response.data;
  } catch (error: any) {
    throw new Error("Error getting product: " + error.message);
  }
}

const updateProductStock = async (products: CartProduct[]) => {
  try {
    products.map(async (product) =>  {
      const response = await axios.get(`http://localhost:3000/products/${product.id}`);
      const stock = response.data.stock - product.quantity;
      await axios.put(`http://localhost:3000/products/${product.id}`, { ...response.data, stock });
    })
  } catch (error: any) {
    throw new Error("Error updating product stock: " + error.message);
  }
}


export { getProducts, getProductDetail, updateProductStock };
