import React, { useState, useEffect } from "react";
import Product from "../Components/Product";
import SearchComponent from "../Components/Search";
import { fetchProducts } from "../Hooks/fetchApi";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="container mt-5">
      <h1>Welcome to E-com</h1>
      <p>Check out our products below:</p>
      <hr />
      <SearchComponent onSearch={handleSearch} />
      <div className="row">
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
