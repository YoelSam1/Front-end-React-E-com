import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import ProductDetail from "./Pages/ProductDetail";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import "./App.css";
import Cart from "./Pages/Cart";
import { CartProvider } from "./Context/cartContext";
import CheckoutSuccess from "./Pages/CheckoutSuccess";

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
