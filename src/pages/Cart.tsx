import { useCart } from '../hooks/useCart';
function CartPage(){
    const {cart} = useCart();
    console.log("cart", cart.length)
    return (
      <div>
        <h4 className="text-2xl	font['Inter'] font-extrabold mb-10">
          Shopping Cart
        </h4>
        {cart.length === 0 ? (
          <div> Your cart is empty </div>
        ) : (
          <div>
            <div className="grid grid-cols-3 mb-5">
              <h3 className="text-[#555555]">Product</h3>
              <h3 className="text-[#555555]">Quantity</h3>
              <h3 className="text-[#555555]">Price</h3>
            </div>
            <div className="border-[0.1rem] border-gray-100 mb-5"></div>
            {cart.map((product) => (
              <div key={product.id} className="grid grid-cols-3">
                <div className="flex mb-5 gap-5">
                  <img className="w-[6rem] rounded-md" src={product.image} />
                  
                  <p className="font-medium">{product.title}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
}

export default CartPage;