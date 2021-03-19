import React from "react";
import { withRouter } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
// import CardDeck from 'react-bootstrap/CardDeck'
const CardHome = () => {
  return (
  
      <CardGroup>
        <Card bg="dark" text="white" border="secondary" style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://source.unsplash.com/286x180/?man"
          />
          <Card.Body>
            <Card.Title>Tushar
            </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="success">View Profile</Button>
          </Card.Body>
        </Card>

        <Card bg="dark" text="white" border="secondary" style={{ width: "18rem" }}>          <Card.Img
            variant="top"
            src="https://source.unsplash.com/286x180/?man"
          />
          <Card.Body>
            <Card.Title>Tejas</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="success">View Profile</Button>
          </Card.Body>
        </Card>
        <Card bg="dark" text="white" border="secondary" style={{ width: "18rem" }}>          <Card.Img
            variant="top"
            src="https://source.unsplash.com/286x180/?man"
          />
          <Card.Body>
            <Card.Title>Shreyas</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="success">View Profile</Button>
          </Card.Body>
        </Card>
        <Card bg="dark" text="white" style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://source.unsplash.com/286x180/?man"
          />
          <Card.Body>
            <Card.Title>Dhruvil</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="success">View Profile</Button>
          </Card.Body>
        </Card>
      </CardGroup>
  
  );
};

export default withRouter(CardHome);
