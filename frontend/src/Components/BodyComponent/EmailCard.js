import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthComponent/Auth';
function EmailCard() {
  const auth=useAuth();
  const navigate = useNavigate();
  const handleClick = () => {
    
    navigate("services/emailservice");
  };
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./images/email.jpg" height="170px"/>
      <Card.Body>
        <Card.Title>Email Service</Card.Title>
        <Card.Text>
        Email Service that sends emails based on templates. Can be used as a standalone web service or as an express router. It name is self-explanatory, this component will be responsible for sending emails.
        </Card.Text>
      </Card.Body>
      <Card.Body>
      
        <Button variant="primary" onClick={handleClick}>Take Live Demo...</Button>
        
      </Card.Body>
    </Card>
    </>
  )
}

export default EmailCard