import React, { useEffect } from "react";
import "./Home.css";
import EmailCard from "./EmailCard";
import SmsCard from "./SmsCard";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PNCard from "./PNCard";
import Footer from "../FooterComponent/Footer";
import NavBar from "../NavbarComponent/Nav";
function Home() {
    
  return (
    <>  
    <NavBar/>
    <div className="homebg">
        <div>
        <h1 className="title">
        Welcome to <span className="sitename">Notifier.com</span>
        </h1>
        <h5 className="smalltitle">
            Build generic Service that fit for any use-cases.... 
        </h5>
        <div>
            <h5 >
                <a href="#services" className="startTitle">Get Start Now...</a>
            </h5>
        </div>
        </div>
        <section id="services">
            <h1 className="text-center serviceTitle">
                Our Services
            </h1>
            <Container>
                <Row>
                    <Col>
            <div className="cardStyle">
            <EmailCard/>
            </div>
            </Col>
            <Col>
            <div className="cardStyle">
            <SmsCard/>
            </div>
            </Col>
            <Col>
            <div className="cardStyle">
                <PNCard/>
            </div>
            </Col>
            </Row>
            </Container>
        </section>
    </div>
    <Footer/>
    </>
  );
}

export default Home;
