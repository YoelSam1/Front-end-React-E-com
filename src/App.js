import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ProductDetail from "./pages/ProductDetail";
import Navbar from "./components/Navbar";
import "./App.css";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";
import CheckoutSuccess from "./pages/CheckoutSuccess";

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
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
