import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Provider } from "react-redux";
import RootLayout from "./pages/Root"
import Home from "./pages/Home"
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import {CartProvider} from "./context/cart";
import CartPage from "./pages/Cart";
import store from "../store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path:"/products", element: <Products/>},
      { path: "/products/:id", element: <ProductDetail/>},
      { path: "/cart", element: <CartPage/>}
    ]
  }
])

function App() : JSX.Element {
  return (
    <Provider store={store}>
      <CartProvider>
          <div className="max-w-screen-xl mx-auto">
              <RouterProvider  router={router} />
          </div>
      </CartProvider>
    </Provider>
  )
}

export default App
