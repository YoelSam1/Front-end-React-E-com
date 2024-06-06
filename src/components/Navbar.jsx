import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { Link, useLocation } from "react-router-dom";
import "../App.css";

const NavigationBar = () => {
  const { cartCount } = useCart();
  const location = useLocation();

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
              <Nav.Link
                as={Link}
                to="/"
                className={location.pathname === "/" ? "active-link" : ""}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/contact"
                className={
                  location.pathname === "/contact" ? "active-link" : ""
                }
              >
                Contact
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/about"
                className={location.pathname === "/about" ? "active-link" : ""}
              >
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
