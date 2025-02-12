import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import "./App.css";
import ProductDetails from "./components/ProductDetails";
import Products from "./components/Products";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:id" element={<ProductDetails />}></Route>

        <Route path="*" element={<h3>Not found!</h3>}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
