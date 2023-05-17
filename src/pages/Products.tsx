import { useEffect } from "react";
import { getProducts } from "../utilities/productsAxios";
import { Product } from "../interfaces/Product";
import Card from "../components/Card/Card";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts, setProducts } from "../reducers/productSlice";

function Products() : JSX.Element {
  const products: Product[] = useSelector(selectProducts);
  const navigate = useNavigate();
  
  const clickHandler = (id: number) => {
    navigate(`/products/${id}`)
  }

  return (
    <div className="max-w-screen-xl mx-auto md:px-4">
      <h4 className="text-2xl	font['Inter'] font-extrabold mb-10">Products</h4>
      <div className="grid grid-cols-4 gap-6">
        {products?.map((product) => (
          <div key={product.id}>
            <Card
              product={product}
              clickHandler={() => clickHandler(product.id)}
              flashSale={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
