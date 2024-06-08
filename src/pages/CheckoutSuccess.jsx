import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Context/cartContext";

const CheckoutSuccess = () => {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <span className="fs-1">😊</span>
        <hr className="mt-5" />
        <h2 className="mt-5">Checkout Successful!</h2>
        <p>Your order has been successfully placed.</p>
        <div>
          <Link to="/" className="btn btn-primary">
            Back to Store
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
