import { Product } from "../interfaces/Product";

interface CardProps {
  product: Product;
  clickHandler: (id: number) => void;
}

function Card({product, clickHandler}: CardProps) {
  return (
    <div className="mb-5">
      <div onClick={() => clickHandler(product.id)} className="card-image flex justify-center items-center w-72 h-[22rem] bg-[#FAFAFA] rounded-md border-solid border-[1px] border-[#EAEAEA] mb-2 cursor-pointer">
        <img className="w-[17rem] h-[21rem]" src={product.image} />
      </div>
      <div className="card-content">
        <div className="card-title">
          <h4 className="font['Inter'] font-semibold leading-8 text-[#191919]">
            {product.title}
          </h4>
        </div>
        <div className="card-description">
          <p className="text-[#6995B1] font-light text-xl leading-10">
            ${product.price}.00
          </p>
          {
            product.stock === 0 ? (
              <p className="text-[#555555] text-base">Out of Stock</p>
            ): null
          }
        </div>
      </div>
    </div>
  );
}

export default Card;
