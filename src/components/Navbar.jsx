// src/Components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Navbar as BootstrapNavbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../Context/cartContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../App.css";

// Utility function to fetch user data (assuming it's stored in localStorage)
const getUser = () => JSON.parse(localStorage.getItem('user'));

const AppNavbar = () => {
  const { cartCount } = useCart();
  const location = useLocation();
  const navigate = useNavigate();

  // Local state to manage user information
  const [user, setUser] = useState(getUser());

  useEffect(() => {
    // Update user state if needed
    setUser(getUser());
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  return (
    <>
      <BootstrapNavbar bg="light" expand="lg" fixed="top">
        <Container>
          <BootstrapNavbar.Brand as={Link} to="/">
            <strong>E-com</strong>
          </BootstrapNavbar.Brand>

          <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
          <BootstrapNavbar.Collapse id="basic-navbar-nav">
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

            {user ? (
              <NavDropdown
                title={<img src={user.avatar} alt="Avatar" className="avatar" />}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item as={Link} to="/profile">
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item onClick={handleLogout}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>
      <div>
        <hr className="border-white" />
      </div>
    </>
  );
};

export default AppNavbar;
