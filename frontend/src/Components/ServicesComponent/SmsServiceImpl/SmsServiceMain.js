import React from 'react'
import "../ServicesMain.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link, Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import NavBar from "../../NavbarComponent/Nav";
import Footer from "../../FooterComponent/Footer";
export default function SmsServiceMain() {
  return (
    <>
      <NavBar />
      <div className="servicesbg">
        <Container fuide>
          <div >
            <h1 className="m-3">SMS Service</h1>
          </div>
          <div>
            <br></br>
            <hr></hr>
            <br></br>
            <Container>
              <Row>
                <Col>
                  <Link to="/services/smsservice">
                    <Button variant="primary" >View All Patients</Button>
                  </Link>
                </Col>
                <Col>
                  <Link to="addpatient">
                    <Button variant="success">Add Patient</Button>
                  </Link>
                </Col>
                <Col>
                  <Link to="updatepatient">
                    <Button variant="warning">Update Patient</Button>
                  </Link>
                </Col>
                <Col>
                  <Link to="deletepatient">
                    <Button variant="danger">Delete Patient</Button>
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
