import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-light py-3 mt-5 ">
      <Container>
        <Row>
          <Col className="text-center">
            <p>© 2024 E-com. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
