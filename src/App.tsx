import { RouterProvider, createBrowserRouter } from "react-router-dom"
import RootLayout from "./pages/Root"
import Home from "./pages/Home"
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path:"/products", element: <Products/>},
      { path: "/products/:id", element: <ProductDetail/>}
    ]
  }
])

function App() {
  return ( 
     <div className="max-w-screen-xl mx-auto">
        <RouterProvider  router={router} />
     </div>
  )
}

export default App
