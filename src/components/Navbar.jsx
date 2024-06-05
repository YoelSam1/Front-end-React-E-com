import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom"; // Import Link

const NavigationBar = () => {
  const { cartCount } = useCart();

  return (
    <>
      <Navbar bg="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <strong>E-com</strong>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
            </Nav>
            <Nav.Link as={Link} to="/cart">
              <FaShoppingCart /> {cartCount}
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <hr className="border-white" />
      </div>
    </>
  );
};

export default NavigationBar;
