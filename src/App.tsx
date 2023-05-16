import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Provider, useDispatch } from "react-redux";
import { RecoilRoot } from "recoil";
import RootLayout from "./pages/Root"
import Home from "./pages/Home"
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import {CartProvider} from "./context/cart";
import CartPage from "./pages/Cart";
import store from "../store";
import CheckoutPage from "./pages/Checkout";
import PaymentPage from "./pages/Payment";
import TransactionPage from "./pages/Transaction";
import ShippingHistory from "./pages/ShippingHistory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path:"/products", element: <Products/>},
      { path: "/products/:id", element: <ProductDetail/>},
      { path: "/cart", element: <CartPage/>},
      { path: "/checkout", element: <CheckoutPage />},
      { path: "/payment", element: <PaymentPage/>},
      { path: "/transaction", element: <TransactionPage/>},
      { path: "/history", element: <ShippingHistory/>}
    ]
  }
])
  
function App() : JSX.Element {
  return (
    <Provider store={store}>
      <CartProvider>
        <RecoilRoot>
          <div>
            <RouterProvider router={router} />
          </div>
        </RecoilRoot>
      </CartProvider>
    </Provider>
  );
}

export default App
