import React from "react";
import "../ServicesMain.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link, Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import NavBar from "../../NavbarComponent/Nav";
import Footer from "../../FooterComponent/Footer";
export default function PnServiceMain() {
  return (
    <>
      <NavBar />
      <div className="servicesbg">
        <Container fuide>
          <div >
            <h1 className="m-3">Push Notification Service</h1>
          </div>
          <div>
            <br></br>
            <hr></hr>
            <br></br>
            <Container>
              <Row>
                <Col>
                  <Link to="/services/pushnotificationservice">
                    <Button variant="primary" >View All Customer</Button>
                  </Link>
                </Col>
                <Col>
                  <Link to="addcustomer">
                    <Button variant="success">Add Customer</Button>
                  </Link>
                </Col>
                <Col>
                  <Link to="updatecustomer">
                    <Button variant="warning">Update Customer</Button>
                  </Link>
                </Col>
                <Col>
                  <Link to="deletecustomer">
                    <Button variant="danger">Delete Customer</Button>
                  </Link>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
        <Outlet />
      
      </div>
      <Footer/>
    </>
  )
}
