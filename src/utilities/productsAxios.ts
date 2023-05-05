import axios from "axios";
import { Product } from "../interfaces/Product";

const getProducts = async (): Promise<Product> => {
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

export { getProducts, getProductDetail };
