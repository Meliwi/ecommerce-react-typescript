function Payment (): JSX.Element {
        return (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <label
                htmlFor="payment1"
                className="relative w-full cursor-pointer"
              >
                <input
                  id="payment1"
                  type="radio"
                  className="peer hidden"
                  name="payment"
                />
                <div className="payment-content gap-5 peer-checked:border-blue-500 peer-checked:shadow-lg peer-checked:-translate-y-1">
                  <img
                    src="https://res.cloudinary.com/dq57zsx0w/image/upload/v1685133955/ecommerce/ircfz7mjwaaefbh94xv5.png"
                    alt="mastercard"
                    className="payment-image pl-4 sm:pl-0"
                  />
                  <p className="payment-text">Pay with Mastercard</p>
                </div>
              </label>
              <label
                htmlFor="payment2"
                className="relative w-full cursor-pointer"
              >
                <input
                  id="payment2"
                  type="radio"
                  className="peer hidden"
                  name="payment"
                />
                <div className="payment-content gap-5 peer-checked:border-blue-500 peer-checked:shadow-lg peer-checked:-translate-y-1">
                  <img
                    src="https://res.cloudinary.com/dq57zsx0w/image/upload/v1685145178/ecommerce/visa-logo_e9h9az.png"
                    alt="mastercard"
                    className="payment-image pl-4 sm:pl-0"
                  />
                  <p className="payment-text">Pay with Visa</p>
                </div>
              </label>
              <label
                htmlFor="payment3"
                className="relative w-full cursor-pointer"
              >
                <input
                  id="payment3"
                  type="radio"
                  className="peer hidden"
                  name="payment"
                />
                <div className="payment-content gap-5 peer-checked:border-blue-500 peer-checked:shadow-lg peer-checked:-translate-y-1">
                  <img
                    src="https://res.cloudinary.com/dq57zsx0w/image/upload/v1685145536/ecommerce/paypal-logo_m9icop.png"
                    alt="mastercard"
                    className="payment-image pl-4 sm:pl-0"
                  />
                  <p className="payment-text">Pay with Paypal</p>
                </div>
              </label>
            </div>
          </div>
        );
}

export default Payment;