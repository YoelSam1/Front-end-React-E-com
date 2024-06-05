import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";

const NavigationBar = () => {
  const { cartCount } = useCart();

  return (
    <>
      <Navbar bg="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="/">
            <strong>E-com</strong>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="../pages/contact.jsx">Contact</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
            <Nav.Link href="/cart">
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
