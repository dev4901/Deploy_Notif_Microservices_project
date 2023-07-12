import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
function PNCard() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/services/pushnotificationservice");
  };
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="./images/pn.jpg" height="170px" />
        <Card.Body>
          <Card.Title>Push Notification Service</Card.Title>
          <Card.Text>
            Push notifications service that can be sent messages directly
            to a user's mobile device. Unlike in-app messages,It can appear on a
            lock screen or in the top section of a mobile device.
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Button variant="primary" onClick={handleClick}>
          Take Live Demo...
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default PNCard;
