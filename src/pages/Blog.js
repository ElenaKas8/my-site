import React, { Component } from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
export default class Blog extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md="9">
            <div className="media m-5">
              <img
                width={150}
                height={150}
                className="mr-3"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEzUDGBtRyfAaDy1U41RwSGKPOUSFvhXvvwGtXsBU0bQ&s"
              />
              <div className="media-body">
                <h5>Blog Post</h5>
                <p>
                  "Adventures in the world of technology: artificial
                  intelligence, virtual reality, and cybersecurity. Society's
                  evolution in the age of digitization. New horizons and
                  challenges awaiting us in the future."
                </p>
              </div>
            </div>

            <div className="media m-5">
              <img
                width={150}
                height={150}
                className="mr-3"
                src="https://encrypted-tbn0.gstatic.com/images?
q=tbn:ANd9GcQEzUDGBtRyfAaDy1U41RwSGKPOUSFvhXvvwGtXsBU0bQ&s"
              />
              <div className="media-body">
                <h5>Blog Post</h5>
                <p>
                  "Adventures in the world of technology: artificial
                  intelligence, virtual reality, and cybersecurity. Society's
                  evolution in the age of digitization. New horizons and
                  challenges awaiting us in the future."
                </p>
              </div>
            </div>

            <div className="media m-5">
              <img
                width={150}
                height={150}
                className="mr-3"
                src="https://encrypted-tbn0.gstatic.com/images?
q=tbn:ANd9GcQEzUDGBtRyfAaDy1U41RwSGKPOUSFvhXvvwGtXsBU0bQ&s"
              />
              <div className="media-body">
                <h5>Blog Post</h5>
                <p>
                  "Adventures in the world of technology: artificial
                  intelligence, virtual reality, and cybersecurity. Society's
                  evolution in the age of digitization. New horizons and
                  challenges awaiting us in the future."
                </p>
              </div>
            </div>

            <div className="media m-5">
              <img
                width={150}
                height={150}
                className="mr-3"
                src="https://encrypted-tbn0.gstatic.com/images?
q=tbn:ANd9GcQEzUDGBtRyfAaDy1U41RwSGKPOUSFvhXvvwGtXsBU0bQ&s"
              />
              <div className="media-body">
                <h5>Blog Post</h5>
                <p>
                  "Adventures in the world of technology: artificial
                  intelligence, virtual reality, and cybersecurity. Society's
                  evolution in the age of digitization. New horizons and
                  challenges awaiting us in the future."
                </p>
              </div>
            </div>
          </Col>
          <Col md="3">
            <h5 className="text-center mt=5">Categories</h5>
            <Card>
              <ListGroup variant="slush">
                <ListGroup.Item>Html/Css</ListGroup.Item>
                <ListGroup.Item>JavaScript</ListGroup.Item>
                <ListGroup.Item>Python</ListGroup.Item>
                <ListGroup.Item>Java</ListGroup.Item>
                <ListGroup.Item>C++</ListGroup.Item>
              </ListGroup>
            </Card>

            <Card className="mt-3" bg="light">
              <Card.Body>
                <Card.Title>Side widget</Card.Title>
                <Card.Text>
                  "Adventures in the world of technology: artificial
                  intelligence, virtual reality, and cybersecurity. Society's
                  evolution in the age of digitization. New horizons and
                  challenges awaiting us in the future."
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
