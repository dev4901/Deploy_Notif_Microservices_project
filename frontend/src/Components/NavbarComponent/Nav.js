import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink, Navigate } from "react-router-dom";
import { useAuth } from "../AuthComponent/Auth";
// import { useAuth0 } from "@auth0/auth0-react";


function NavIteam() {
  // const { loginWithRedirect,isAuthenticated ,logout} = useAuth0();
  const auth = useAuth();
  console.log(auth.isLoggedIn);
  return (
    <>
      {[false, "sm", "md", "lg", "xl"].map((expand) => (
        <Navbar
          fixed="top"
          bg="dark"
          variant="dark"
          key={expand}
          expand={expand}
        >
          <Container>
            {"   "}
            <Navbar.Brand href="/" className="me-auto text-center">
              {/* <img alt="logo" src="./images/logo.jpg" width="50" height="50" /> */}
              <img alt="logo" src={process.env.PUBLIC_URL + '/images/logo.jpg'} width="50" height="50" />

              {"   "}
              Notifier
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Notifier
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="me-auto">
                  <Nav.Link to="/" className="m-3 ms-5 ">
                    <NavLink
                      style={{ color: "white", textDecoration: "none" }}
                      to="/"
                    >
                      Home
                    </NavLink>
                  </Nav.Link>
                  <Nav.Link to="/dashboard" className="m-3">
                    <NavLink
                      to="/dashboard"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      Dashboard
                    </NavLink>
                  </Nav.Link>

                  <Nav.Link to="/services" className="m-3">
                    <NavLink
                      to="/services"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      Services
                    </NavLink>
                  </Nav.Link>
                  {/* :
            <Nav.Link to="/login" className="m-3">
            <NavLink to="" style={{color:"white",textDecoration:"none"}} onClick={() => loginWithRedirect()}>Services</NavLink></Nav.Link>
          } */}
                  <Nav.Link to="/contactus" className="m-3">
                    <NavLink
                      to="/contactus"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      Contact Us
                    </NavLink>
                  </Nav.Link>
                  <Nav.Link to="/Aboutus" className="m-3">
                    <NavLink
                      to="/aboutus"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      About Us
                    </NavLink>
                  </Nav.Link>
                  {auth.isLoggedIn && (
                    // console.log(auth.isLoggedIn)
                    <Nav.Link to="/logout" className="m-3">
                      <NavLink
                        to="/"
                        style={{ color: "white", textDecoration: "none" }}
                        onClick={() => {
                          window.localStorage.removeItem("token");
                          auth.logout();
                        }}
                      >
                        Log Out
                      </NavLink>
                    </Nav.Link>
                  )}
                  {!auth.isLoggedIn && (
                    <Nav.Link to="/login" className="m-3">
                      <NavLink
                        to="/login"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Log In
                      </NavLink>
                    </Nav.Link>
                  )}
                  {!auth.isLoggedIn && (
                    <Nav.Link to="/signup" className="m-3">
                      <NavLink
                        to="/signup"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Sign Up
                      </NavLink>
                    </Nav.Link>
                  )}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavIteam;
