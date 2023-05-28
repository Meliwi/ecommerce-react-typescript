import { Product } from "../../interfaces/Product";

interface CardProps {
  product: Product;
  clickHandler: (id: number) => void;
  flashSale: boolean;
}

function Card({ product, clickHandler, flashSale }: CardProps): JSX.Element {
  return (
    <div
      className="mb-5 cursor-pointer relative"
      onClick={() => clickHandler(product.id)}
    >
      <div
        className="card-image flex justify-center items-center bg-[#FAFAFA] rounded-md border-solid border-[1px] border-[#EAEAEA] mb-2
          w-[23rem] h-[27rem] sm:w-[18rem] sm:h-[23rem] md:w-[16rem] md:h-[19rem]"
      >
        {product.stock === 0 && (
          <p className="absolute top-0 left-0 bg-[#6995B1] text-white text-base px-2 transform translate-x-[10px] translate-y-[12px]">
            Out of Stock
          </p>
        )}
        {flashSale && (
          <p className="absolute top-0 left-0 bg-[#6995B1] text-white text-base px-2 transform translate-x-[10px] translate-y-[12px]">
            9% Off
          </p>
        )}
        <img
          className="sm:w-[17rem] sm:h-[22rem] md:w-[15rem] md:h-[18rem] w-[22rem] h-[26rem] transition duration-300 ease-in-out hover:opacity-80"
          src={product.image}
          alt={product.title}
        />
      </div>
      <div className="card-content pl-[0.3rem]">
        <div className="card-title">
          <h4 className="font['Inter'] font-semibold leading-8 text-[#191919]">
            {product.title}
          </h4>
        </div>
        <div className="card-description flex items-center gap-4">
          <p className="text-[#6995B1] font-light text-xl leading-10">
            ${product.price}.00
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
