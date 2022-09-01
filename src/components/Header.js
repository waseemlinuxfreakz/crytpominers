import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// Logo
import Logo from "../images/logo.png";

function Header() {
  return (
    <header className="header_area">
      <Container>
        <Row>
          <Col lg="12">
            <Nav.Link href="#" className="logo site-link">
              <img src={Logo} alt="Logo" />
            </Nav.Link>
          </Col>
        </Row>
        <Row className="align-items-end mt-5">
          <Col>
            <div className="banner-text date">
              <p>
                Date : <span>31/08/2022</span>
              </p>
            </div>
          </Col>
          <Col>
            <div className="pricelist">
              <p>PRICELIST</p>
            </div>
          </Col>
          <Col>
            <div className="banner-text  price">
              <p>
                BTC Price : <span>31/08/2022</span>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
