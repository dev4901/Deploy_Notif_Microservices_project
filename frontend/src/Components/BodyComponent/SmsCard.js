import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
function SmsCard() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/services/smsservice");
  };
  return (
    <>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./images/sms.png" height="170px"/>
      <Card.Body>
        <Card.Title>SMS Service</Card.Title>
        <Card.Text>
        An SMS Service designed to facilitate functionality for basic SMS service. Designs are based on a fictional scenario and update the user. It is more fastest service and easy to use.
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Button variant="primary" onClick={handleClick}>Take Live Demo...</Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default SmsCard