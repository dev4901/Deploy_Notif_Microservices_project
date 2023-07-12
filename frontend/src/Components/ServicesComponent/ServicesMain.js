import React, { useState } from "react";
import Footer from "../FooterComponent/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavBar from "../NavbarComponent/Nav";
import "./ServicesMain.css";
import { Link, useNavigate, Outlet } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useAuth } from "../AuthComponent/Auth";
export default function ServicesMain() {
  let navigate=useNavigate();
  const auth=useAuth();
  return (
    <>
          <NavBar />
          <div className="servicesbg">
            <Container fuide>
              <div>
                <h1 className="text-center">Services</h1>
              </div>
              <div>
                <br></br>
                <hr></hr>
                <br></br>
                <Container>
                  <Row>
                    <Col>
                      <div className="bgForEmail">
                        <Link to="emailservice">
                          <Button
                            className="btnset"
                            variant="outline-danger"
                            onClick={() => {
                              console.log(window.location.href);
                              navigate("/service/emailservice");
                            }}
                          >
                            <b>Checkout Email Service</b>
                          </Button>
                        </Link>
                      </div>
                    </Col>
                    <Col>
                      <div className="bgForSms">
                        <Link to="smsservice">
                          <Button
                            className="btnset"
                            variant="outline-success"
                            onClick={() => navigate("/service/smsservice")}
                          >
                            <b>Checkout SMS Service</b>
                          </Button>
                        </Link>
                      </div>
                    </Col>
                    <Col>
                      <div className="bgForPn">
                        <Link to="pushnotificationservice">
                          <Button
                            className="btnset"
                            variant="outline-dark"
                            onClick={() =>
                              navigate("/service/pushnotificationservice")
                            }
                          >
                            <b>Checkout Push-Notification Service</b>
                          </Button>
                        </Link>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </Container>

            <Outlet />
          </div>
    
          <Footer />
        </>
  );
}
