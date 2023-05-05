import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../interfaces/Product";
import { getProductDetail } from "../utilities/productsAxios";
import {CiShoppingCart} from "react-icons/ci";
import paypalLogo from "../assets/paypal-icon.png";

function ProductDetail() {
  const params = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    getProductDetail(params.id ?? "").then((res) => {
      console.log(res)
      setProduct(res);
    });
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
          <div className="custom-number-input flex">
            <div className="flex flex-row h-10 w-32 rounded-lg relative bg-transparent">
              <button
                data-action="decrement"
                className="border text-gray-600 h-full w-20 rounded-l cursor-pointer outline-none"
              >
                <span className="m-auto text-2xl font-thin">−</span>
              </button>
              <input
                type="number"
                className="outline-none border focus:outline-none text-center w-full font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                name="custom-input-number"
                value="0"
              ></input>
              <button
                data-action="increment"
                className="border text-gray-600 h-full w-20 rounded-r cursor-pointer"
              >
                <span className="m-auto text-2xl font-thin">+</span>
              </button>
            </div>
          </div>
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