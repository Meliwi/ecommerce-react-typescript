import { useDispatch, useSelector } from "react-redux";
import { selectProducts, setProducts } from "../../reducers/productSlice";
import Card from "../Card/Card";
import { Product } from "../../interfaces/Product";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getProducts } from "../../utilities/productsAxios";


function FlashSales() {
    const products: Product[] = useSelector(selectProducts)
    const flashSales: Product[] = products.slice(-4);
    const navigate = useNavigate();
    const dispatch = useDispatch();

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

    const clickHandler = (id: number) => {
        navigate(`/products/${id}`);
    };
    return (
      <div>
        <div className="max-w-screen-xl mx-auto md:px-4 md:mt-12 p-6">
          <h4 className="text-2xl	font['Inter'] font-extrabold mb-10">
            Flash Sales
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {flashSales?.map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-center"
              >
                <Card
                  product={product}
                  clickHandler={() => clickHandler(product.id)}
                  flashSale={true}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}


export default FlashSales;