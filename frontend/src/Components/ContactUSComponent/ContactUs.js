import React from 'react'
import Footer from '../FooterComponent/Footer'
import NavBar from "../NavbarComponent/Nav";
import Container from 'react-bootstrap/Container';
import './ContactUs.css'
function ContactUs() {
  return (
    <>
    <NavBar/>
    <div className='contactusbg'>
    <Container fuide>
        <div>
            <h1 className='text-center'>
                Contact Us
            </h1>
        </div>
        <div>
            <br></br>
            <hr></hr>
            <br></br>
        <Container>
                <div>
                    <h3 className='m-5'>
                        Developed By : Divyesh Variya 
                    </h3>
                    <h3 className='m-3'>
                        Contact By : Divyesh.Variya@einfochips.com
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

export default ContactUs