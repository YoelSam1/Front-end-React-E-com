import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import { fetchProducts } from "./components/fetch-api";
import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";
import ProductDetail from "./pages/ProductDetail"; // Correct import
import Navbar from "./components/Navbar"; // Keep the name as Navbar
import "./App.css";
import Cart from "./pages/cart";
import { CartProvider } from "./context/CartContext"; // Import CartProvider
import CheckoutSuccess from "./pages/CheckoutSuccess";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const productsData = await fetchProducts();
      setProducts(productsData);
    };
    fetchData();
  }, []);

  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Layout>
          <Routes>
            <Route path="/" element={<Home products={products} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout-success" element={<CheckoutSuccess />} />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  );
}

export default App;
