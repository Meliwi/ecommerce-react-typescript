import { RouterProvider, createBrowserRouter } from "react-router-dom"
import RootLayout from "./pages/Root"
import Home from "./pages/Home"
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import {CartProvider} from "./context/cart";
import CartPage from "./pages/Cart";

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
     <CartProvider>
        <div className="max-w-screen-xl mx-auto">
            <RouterProvider  router={router} />
        </div>
     </CartProvider>
  )
}

export default App
