import { useFormik } from "formik";
import * as yup from 'yup';
import { usePayment } from "../../hooks/usePayment";

function Payment (): JSX.Element {
  const { handleFinalPayment } = usePayment();
  const formik = useFormik({
    initialValues: {
      payment: "",
    },
    validationSchema: yup.object().shape({
      payment: yup.string().required("Payment is required"),
    }),
    onSubmit: () => {
      if (formik.isValid) {
        handleFinalPayment();
      }
    },
    enableReinitialize: true,
  });

    return (
      <div>
        <form onSubmit={formik.handleSubmit}>
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
                value={formik.values.payment}
                onChange={() => formik.setFieldValue("payment", "mastercard")}
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
                value={formik.values.payment}
                onChange={() => formik.setFieldValue("payment", "visa")}
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
                value={formik.values.payment}
                onChange={() => formik.setFieldValue("payment", "paypal")}
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
          {/*
          <button
            className="bg-black text-white p-3 rounded-lg w-1/5 mt-16"
            type="submit"
            disabled={!formik.isValid}
          >
            Save
          </button> */}
        </form>
      </div>
    );
}

export default Payment;