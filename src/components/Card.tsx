import { Product } from "../interfaces/Product";


function Card (product: Product) {
    return (
      <div className="w-60 h-60 mb-16 bg-[#EAEAEA]">
        <div>
          <div className="card-image">
            <img src={product.image} />
          </div>
          <div className="card-content">
            <div className="card-title">
              <h4>{product.title}</h4>
            </div>
            <p>{product.price}</p>
          </div>
        </div>
      </div>
    );
}

export default Card;