import { useEffect, useState } from "react";
import { getProducts } from "../utilities/productsAxios";
import { Product } from '../interfaces/Product';
import Card from "../components/Card";

function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res);
      console.log(products)
    });
  }, []); 

  return (
    <div>
      <h4 className="text-3xl	font['Inter'] font-extrabold">Products</h4>
      <div className="grid grid-cols-4">
        {products.map((product) => (
          <div key={product.id}>
            <Card {...product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
