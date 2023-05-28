import axios from "axios";
import { Product } from "../interfaces/Product";

const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get(
      "https://restful-api-ecommerce.vercel.app/products/"
    );
    return response.data;
  } catch (error: any) {
    throw new Error("Error getting products: " + error.message);
  }
};

const getProductDetail = async (id: string): Promise<Product> => {
  try {
    const response = await axios.get(
      `https://restful-api-ecommerce.vercel.app/products/${id}`
    );
    return response.data;
  } catch (error: any) {
    throw new Error("Error getting product: " + error.message);
  }
}

const updateProductStockJSON = async (products: Product[]) => {
  try {
    const requests = products.map((product) =>
      axios.put(
        `https://restful-api-ecommerce.vercel.app/products/${product.id}`,
        product
      )
    );
    await Promise.all(requests);
  } catch (error: any) {
    throw new Error("Error updating product stock: " + error.message);
  }
};


export { getProducts, getProductDetail, updateProductStockJSON };
