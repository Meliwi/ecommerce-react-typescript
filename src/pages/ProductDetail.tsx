import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../interfaces/Product";
import { getProductDetail } from "../utilities/productsAxios";
import {CiShoppingCart} from "react-icons/ci";
import paypalLogo from "../assets/paypal-icon.png";
import CounterButton from "../components/CounterButton";

function ProductDetail() {
  const params = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    async function getProduct() {
        const res = await getProductDetail(params.id ?? "");
        setProduct(res);
    }
    getProduct();
  }, [params]);

  return (
    <div className="flex gap-5">
      <div>
        <img src={product?.image} alt="" />
      </div>
      <div className="flex flex-col gap-4 max-w-lg">
        <h3 className="text-[#1A1A1A] text-xl font-bold">{product?.title}</h3>
        <p className="text-[#555555] text-base">{product?.description}</p>
        <div className="flex flex-col gap-4">
          <p>Color:</p>
          <div className="flex flex-row">
            {product?.colors.map((color) => (
              <div
                key={color}
                className="w-8 h-8 rounded-full border border-gray-200 mr-2"
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium">Size</label>
          <select
            id="sizes"
            className="border border-gray-300 text-sm rounded-lg block w-full p-2.5 w-3/4"
          >
            {product?.sizes.map((size: string, key: number) => (
              <option key={key} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center gap-2">
          <CounterButton />
          <button className="flex items-center justify-center bg-black text-white rounded-md px-3 ml-2 h-10 gap-2 w-60">
            <CiShoppingCart className="inline-block" />
            Add to Cart
          </button>
        </div>
        <div className="flex gap-[17rem]">
          <p className="text-[#6995B1] font-light text-xl leading-10">
            ${product?.price}.00
          </p>
        </div>
        <div className="border-[0.1rem]"></div>
        <div className="bg-gray-200 w-24 px-2 rounded border">
          <img className="w-[5rem]" src={paypalLogo} />
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;