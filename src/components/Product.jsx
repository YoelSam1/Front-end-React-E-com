import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const [loading, setLoading] = useState(true);
  const hasDiscount = product.discountedPrice !== product.price;
  const discountPercentage = hasDiscount
    ? (
        ((product.price - product.discountedPrice) / product.price) *
        100
      ).toFixed(2)
    : 0;

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="col-md-4 mb-3 mt-5">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="card h-100 d-flex flex-column">
          <Link to={`/product/${product.id}`}>
            <img
              src={product.image.url}
              className="card-img-top img-fluid product-image rounded"
              alt={product.image.alt}
            />
          </Link>
          <div className="card-body d-flex flex-column justify-content-between">
            <div>
              <h5 className="card-title">{product.title}</h5>

              {!hasDiscount && (
                <p className="card-text">Price: ${product.price}</p>
              )}

              {hasDiscount && (
                <p className="card-text">
                  Price: <del>${product.price}</del> ${product.discountedPrice}
                </p>
              )}

              {hasDiscount && (
                <p className="card-text">Discount: ({discountPercentage}%)</p>
              )}
            </div>
            <Link
              to={`/product/${product.id}`}
              className="btn btn-primary align-self-end mt-3"
            >
              View Details
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
