import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../Hooks/FetchApi";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchData = async () => {
      const productData = await fetchProductById(id);
      setProduct(productData.data);
    };
    fetchData();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const hasDiscount = product.discountedPrice !== product.price;

  const discountPercentage = hasDiscount
    ? (
        ((product.price - product.discountedPrice) / product.price) *
        100
      ).toFixed(2)
    : 0;

  return (
    <Container className="mt-5">
      <h1 className="mb-4">Individual product page</h1>
      <hr className="mb-5" />
      <Row>
        <Col
          md={6}
          className="d-flex align-items-center justify-content-center"
        >
          {product.image ? (
            <img
              src={product.image.url}
              className="img-fluid product-detail-image"
              alt={product.image.alt || "Product Image"}
            />
          ) : (
            <div>No Image Available</div>
          )}
        </Col>
        <Col md={6}>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          {!hasDiscount && <p>Price: ${product.price}</p>}
          {hasDiscount && (
            <p>
              Price: <del>${product.price}</del> ${product.discountedPrice}
            </p>
          )}
          {hasDiscount && <p>Discount: ({discountPercentage}%)</p>}
          <Button variant="primary" onClick={() => addToCart(product)}>
            Add to Cart
          </Button>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <h2>Reviews</h2>
          {product.reviews && product.reviews.length > 0 ? (
            <Row>
              {product.reviews.map((review) => (
                <Col xs={12} md={6} lg={4} className="mb-4" key={review.id}>
                  <Card>
                    <Card.Body>
                      <Card.Title>{review.username}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        Rating: {review.rating} / 5
                      </Card.Subtitle>
                      <Card.Text>{review.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          ) : (
            <p>No reviews available for this product.</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
