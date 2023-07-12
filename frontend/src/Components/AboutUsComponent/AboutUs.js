import React from 'react'
import Footer from '../FooterComponent/Footer'
import NavBar from "../NavbarComponent/Nav";
import Container from 'react-bootstrap/Container';
import './AboutUs.css'
function AboutUs() {
  return (
    <>
    <NavBar/>
    <div className='contactusbg'>
    <Container fuide>
        <div>
            <h1 className='text-center'>
                About Us
            </h1>
        </div>
        <div>
            <br></br>
            <hr></hr>
            <br></br>
        <Container>
                <div>
                    <h1 className='m-5'>
                        Notifier.com
                    </h1>
                    <h3 className='m-3'>
                        We provide the generic microservice that combines multiple other small microservices with any use-case secenarios.  
                    </h3>
                </div>
        </Container>
        </div>
    </Container>
    </div>
    <Footer/>
    </>
  )
}

export default AboutUs