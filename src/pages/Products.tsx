import { Product } from "../interfaces/Product";
import Card from "../components/Card/Card";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts, setProducts } from "../reducers/productSlice";
import { useEffect, useState } from "react";
import { getProducts } from "../utilities/productsAxios";

function Products(): JSX.Element {
  const products: Product[] = useSelector(selectProducts);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isContentLoaded, setIsContentLoaded] = useState(false);

    useEffect(() => {
      async function fetchData() {
        try {
          const res = await getProducts();
          dispatch(setProducts(res));
        } catch (error) {
          throw error;
        }
      }
      fetchData();
    }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsContentLoaded(true);
    }, 300);
  }, []);

  const clickHandler = (id: number) => {
    navigate(`/products/${id}`);
  };

  return (
    <div
      className={`transition-opacity duration-500 max-w-screen-xl m-auto p-6 md:px-4 ${
        isContentLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <h4 className="text-2xl font['Inter'] font-extrabold mb-10">Products</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products?.map((product) => (
          <div key={product.id} className="flex items-center justify-center">
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
