import { Route, Routes } from "react-router-dom";
import "./App.css";
import ClientLayout from "./layouts/Client";

// Pages
import Home from "./pages/Client/Home";
import About from "./pages/Client/About";
import Products from "./pages/Client/Products";
import ProductDetails from "./pages/Client/ProductDetails";

import AdminLayout from "./pages/Admin";
import Dashboard from "./pages/Admin/Dashboard";
import AdminProducts from "./pages/Admin/Products";
import AdminAddProducts from "./pages/Admin/AddProduct";
import Page404 from "./pages/Client/Page404";

import { getProducts } from "./services/services";
import { useEffect, useState } from "react";
import Favorites from "./pages/Client/Favorites";
import ShoppingCart from "./pages/Client/ShoppingCart";

function App() {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      {/* Client Layout */}
      <Routes>
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="about" element={<About />} />
          <Route path="products">
            <Route index element={<Products products={products} />}></Route>
            <Route
              path=":id"
              element={<ProductDetails products={products} />}
            ></Route>
          </Route>
          <Route path="favorites" element={<Favorites />} />
          <Route path="cart" element={<ShoppingCart />} />
        </Route>

        {/* Admin Layout */}

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />}></Route>
          <Route path="products">
            <Route
              index
              element={
                <AdminProducts products={products} setProducts={setProducts} />
              }
            ></Route>
            <Route path="new" element={<AdminAddProducts />}></Route>
          </Route>
        </Route>

        {/* Page 404 */}
        <Route path="*" element={<Page404 />}></Route>
      </Routes>
    </>
  );
}

export default App;
