import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../assets/logoCV.png";
import Image from "react-bootstrap/Image";
import "./Navigation.Style.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Navbar className="navbar" variant="dark">
        <Container>
          <Navbar.Brand to="#home" className="logo">
            <Image src={Logo} />
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavLink
              to="personal"
              style={({ isActive }) => ({
                color: isActive ? "white" : "rgba(255, 255, 255, 0.6)",
                textDecoration: "none",
              })}
            >
              Personal Details
            </NavLink>
            <NavLink
              to="work"
              style={({ isActive }) => ({
                color: isActive ? "white" : "rgba(255, 255, 255, 0.6)",
                textDecoration: "none",
              })}
            >
              Work Experience
            </NavLink>
            <NavLink to="#Education">Education</NavLink>
            <NavLink to="#interests">Interests</NavLink>
            <NavLink to="#skills">Skills</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
