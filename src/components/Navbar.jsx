import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../style.scss";
import { AuthContext } from "../context/authContext";

const Navba = () => {
  const menuData = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/Blog",
      name: "Blog",
    },
    {
      path: "/about",
      name: "About",
    },
    {
      path: "write",
      name: "Write",
    },
  ];

  const { currentUser, logout } = useContext(AuthContext);
  return (
    <Navbar className="navbar" expand="lg">
      <Container>
        <Navbar.Brand className="brand" href="/">
          <h2>Tech Time</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {menuData.map((item) => (
              <NavLink
                to={item.path}
                key={item.name}
                style={{ textDecoration: "none" }}>
                <div className="list_item">{item.name}</div>
              </NavLink>
            ))}
          </Nav>
          <Nav className="ms-auto">
            {currentUser ? (
              <Nav.Link className="glow-on-hover" onClick={logout}>
                Logout
              </Nav.Link>
            ) : (
              <Nav.Link className="glow-on-hover">
                <Link className="link" to="/login">
                  Login
                </Link>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navba;
