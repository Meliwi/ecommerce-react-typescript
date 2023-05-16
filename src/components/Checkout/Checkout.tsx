import * as yup from "yup";
import { useFormik } from "formik";
import { useEffect } from "react";
import { getUser, updateUser } from "../../utilities/userAxios";
import { useDispatch } from "react-redux";
import { setEnablePayment } from "../../reducers/paymentSlice";

function Checkout(): JSX.Element {
    const dispatch = useDispatch();

    const formik = useFormik({
      initialValues: {
        id: 0,
        name: "",
        email: "",
        confirmationEmail: "",
        phone: "",
        address: "",
        city: "",
      },
      validationSchema: yup.object().shape({
        name: yup.string().required("Fullname is required"),
        email: yup.string().required("Email is required"),
        confirmationEmail: yup
          .string()
          .required("Confirmation email is required"),
        phone: yup.string().required("Phone number is required"),
        address: yup.string().required("Address is required"),
        city: yup.string().required("City is required"),
      }),
      onSubmit: () => {
        if(formik.isValid) {
          dispatch(setEnablePayment(true))
          updateUser(formik.values.id, formik.values);
        }
      },
      enableReinitialize: true,
    });

    useEffect(() => {
        getUser(1).then((res) => {
            formik.setFieldValue("id", res.id);
            formik.setFieldValue("name", res.name);
            formik.setFieldValue("email", res.email);
            formik.setFieldValue("confirmationEmail", res.email);
            formik.setFieldValue("address", res.address);
            formik.setFieldValue("phone", res.phone);
            formik.setFieldValue("city", res.city);
        });
    }, [])

    return (
      <div>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4 flex flex-col gap-4">
            <div>
              <label className="block text-gray-700 text-sm mb-2">
                Fullname*
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={formik.values.name ?? ""}
                onChange={formik.handleChange}
              />
            </div>
            <div className="flex gap-4">
              <div className="w-2/4">
                <label className="block text-gray-700 text-sm mb-2">
                  Email address*
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={formik.values.email ?? ""}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="w-2/4">
                <label className="block text-gray-700 text-sm mb-2">
                  Confirmation email*
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  name="confirmationEmail"
                  id="email"
                  type="email"
                  placeholder="Enter your confirmation email"
                  value={formik.values.confirmationEmail ?? ""}
                  onChange={formik.handleChange}
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 text-sm mb-2">
                Phone Number*
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                name="phone"
                id="phone"
                type="number"
                pattern="[0-9]*"
                placeholder="Enter your phone number"
                value={formik.values.phone ?? ""}
                onChange={formik.handleChange}
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm mb-2">
                Address*
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                name="address"
                id="address"
                type="text"
                placeholder="Enter your address"
                value={formik.values.address ?? ""}
                onChange={formik.handleChange}
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm mb-2">City*</label>
              <input
                className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                name="city"
                id="city"
                type="text"
                placeholder="City"
                value={formik.values.city ?? ""}
                onChange={formik.handleChange}
              />
            </div>
          </div>
          <button className="bg-black text-white p-3 rounded-lg w-1/5" type="submit">
            Save
          </button>
        </form>
      </div>
    );
}

export default Checkout;
