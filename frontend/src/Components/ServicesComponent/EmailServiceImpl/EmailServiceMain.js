import React from "react";
import "../ServicesMain.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link, Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import NavBar from "../../NavbarComponent/Nav";
import Footer from "../../FooterComponent/Footer";
function EmailService() {
  return (
    <>
      <NavBar />
      <div className="servicesbg">
        <Container fuide>
          <div >
            <h1 className="m-3">Email Service</h1>
          </div>
          <div>
            <br></br>
            <hr></hr>
            <br></br>
            <Container>
              <Row>
                <Col>
                  <Link to="/services/emailservice">
                    <Button variant="primary" >View All Students</Button>
                  </Link>
                </Col>
                <Col>
                  <Link to="addstudent">
                    <Button variant="success">Add Student</Button>
                  </Link>
                </Col>
                <Col>
                  <Link to="updatestudent">
                    <Button variant="warning">Update Student</Button>
                  </Link>
                </Col>
                <Col>
                  <Link to="deletestudent">
                    <Button variant="danger">Delete Student</Button>
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
  );
}

export default EmailService;
