import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import "../App.css";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();
  const calculateDiscountedPrice = (item) => {
    if (item.discountedPrice && item.discountedPrice > 0) {
      return { original: item.price, discounted: item.discountedPrice };
    }
    return { original: item.price };
  };

  const handleQuantityChange = (productId, quantity) => {
    if (quantity < 1) {
      removeFromCart(productId);
    } else {
      updateQuantity(productId, quantity);
    }
  };

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + (item.discountedPrice || item.price) * item.quantity,
    0
  );

  const handleCheckout = () => {
    clearCart();
  };

  return (
    <Container className="cart-container mt-5">
      <Row className="mb-4">
        <Col className="text-center">
          <h1>Your Cart</h1>
        </Col>
      </Row>
      {cartItems.length > 0 && (
        <Row className="mb-4">
          <Col className="text-center fw-bold">
            <div>
              <span>Total: ${totalPrice.toFixed(2)}</span>
            </div>
          </Col>
        </Row>
      )}
      <Row className="mb-4">
        <Col className="text-center">
          {cartItems.length > 0 && (
            <Link to="/checkout-success">
              <Button variant="primary" onClick={handleCheckout}>
                Checkout
              </Button>
            </Link>
          )}
        </Col>
      </Row>
      <hr className="mb-5" />
      {cartItems.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty.</p>
      ) : (
        <>
          <Row>
            {cartItems.map((item) => {
              const prices = calculateDiscountedPrice(item);
              return (
                <Col key={item.id} xs={12} md={6} lg={4} className="mb-4">
                  <Card>
                    <Link to={`/product/${item.id}`}>
                      <Card.Img
                        variant="top"
                        src={item.image.url}
                        className="cart-product-image"
                      />
                    </Link>
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>
                        Price:{" "}
                        {prices.discounted ? (
                          <>
                            <span>${prices.discounted.toFixed(2)}</span>
                            {prices.original !== prices.discounted && (
                              <span
                                className="ms-2 text-muted"
                                style={{
                                  textDecoration: "line-through",
                                }}
                              >
                                ${prices.original.toFixed(2)}
                              </span>
                            )}
                          </>
                        ) : (
                          <span>${prices.original.toFixed(2)}</span>
                        )}
                      </Card.Text>
                      <Card.Text>
                        Quantity:
                        <Button
                          variant="secondary"
                          className="mx-2"
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity - 1)
                          }
                        >
                          -
                        </Button>
                        {item.quantity}
                        <Button
                          variant="secondary"
                          className="mx-2"
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </Button>
                      </Card.Text>
                      <Button
                        variant="danger"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </>
      )}
    </Container>
  );
};

export default Cart;
