import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../assets/logoCV.png";
import Image from "react-bootstrap/Image";
import "./Navigation.Style.css";

const Navigation = () => {
  return (
    <div>
      <Navbar className="navbar" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className="logo">
            <Image src={Logo} />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#Personal Details" className="personal-details">
              Personal Details
            </Nav.Link>
            <Nav.Link href="#Work Experience">Work Experience</Nav.Link>
            <Nav.Link href="#Education">Education</Nav.Link>
            <Nav.Link href="#interests">Interests</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
