import { useEffect, useState } from "react";
import { getProducts } from "../utilities/productsAxios";
import { Product } from "../interfaces/Product";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getProducts();
        setProducts(res);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const clickHandler = (id: number) => {
    navigate(`/products/${id}`)
  }

  return (
    <div>
      <h4 className="text-2xl	font['Inter'] font-extrabold mb-10">Products</h4>
      <div className="grid grid-cols-4">
        {products?.map((product) => (
          <div key={product.id}>
            <Card product={product} clickHandler={() => clickHandler(product.id)}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
