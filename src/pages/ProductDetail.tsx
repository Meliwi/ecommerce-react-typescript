import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useParams } from "react-router-dom";
import { Product } from '../interfaces/Product';
import { getProductDetail } from "../utilities/productsAxios";
import {CiShoppingCart} from "react-icons/ci";
import paypalLogo from "../assets/paypal-icon.png";
import CounterButton from "../components/Counter/CounterButton";
import * as yup from "yup";
import { useCart } from "../hooks/useCart";

function ProductDetail() : JSX.Element {
  const params = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [isContentLoaded, setIsContentLoaded] = useState(false);

  const { addToCart } = useCart()
  const formik = useFormik({
    initialValues: {
      product: {
        id: product?.id ?? 0,
        title: product?.title ?? "",
        price: product?.price ?? 0,
        image: product?.image ?? "",
        quantity: product?.quantity ?? 1,
        stock: product?.stock ?? 0,
        color: product?.colors[0] ?? "",
        size: product?.sizes[0] ?? "",
        productInCart: false,
      },
    },
    validationSchema: yup.object().shape({
      quantity: yup.number().required("Quantity is required"),
      color: yup.string().required("Color is required"),
      size: yup.string().required("Size is required"),
    }),
    onSubmit: () => {
    },
    enableReinitialize: true,
  });

  useEffect(() => {
    async function getProduct() {
        const res = await getProductDetail(params.id ?? "");
        setProduct(res);
    }
    getProduct();
    setTimeout(() => {
      setIsContentLoaded(true);
    }, 300);
  }, [params]);

  return (
    <div
      className={`transition-opacity duration-500 flex flex-col md:flex-row gap-5 max-w-screen-xl mx-auto p-8 justify-center items-center md:justify-start md:items-start ${
        isContentLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <div>
        <img
          className="transition duration-300 ease-in-out hover:scale-105"
          src={product?.image}
          alt=""
        />
      </div>
      <div className="flex flex-col gap-4 max-w-lg">
        <h3 className="text-[#1A1A1A] text-xl font-bold">{product?.title}</h3>
        <p className="text-[#555555] text-base">{product?.description}</p>
        <div className="border-[0.1rem] border-gray-100"></div>
        <div className="flex gap-[17rem]">
          <p className="text-[#6995B1] font-light text-xl leading-10">
            ${product?.price}.00
          </p>
        </div>
        <form className="grid gap-4" onSubmit={formik.handleSubmit}>
          <div className="flex gap-4 items-center">
            <label className="block mb-2 text-sm font-medium">Size</label>
            <select
              id="sizes"
              className="border border-gray-300 text-sm rounded-lg block w-full p-2.5 md:w-1/4"
              value={formik.values.product.size}
              onChange={(event) =>
                formik.setFieldValue("product.size", event.target.value)
              }
            >
              {product?.sizes.map((size: string, key: number) => (
                <option key={key} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
          <div className="border-[0.1rem] border-gray-100"></div>
          <div className="flex items-center gap-2">
            <CounterButton
              product={formik.values.product}
              valueQuantity={formik.values.product.quantity}
              formik={formik}
            />
            <button
              type="button"
              disabled={formik.values.product.stock === 0}
              onClick={() => {
                addToCart(formik.values.product);
              }}
              className={`flex items-center justify-center bg-black text-white rounded-md px-3 ml-2 h-10 gap-2 w-full md:w-60 ${
                formik.values.product.stock === 0 ? "opacity-50" : ""
              }`}
            >
              <CiShoppingCart className="inline-block" />
              Add to Cart
            </button>
          </div>
        </form>
        <div className="border-[0.1rem] border-gray-100"></div>
        <div className="bg-gray-200 w-24 px-2 rounded border">
          <img className="w-[5rem]" src={paypalLogo} />
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;