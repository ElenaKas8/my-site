import React, { Component } from "react";
import CarouselBox from "../components/CarouselBox";
import { Container, Card, Button, CardGroup } from "react-bootstrap";

export default class Home extends Component {
  render() {
    return (
      <>
        <CarouselBox />
        <Container>
          <h2 className="text-center mr-4">Our team</h2>
          <CardGroup className="m-4">
            <Card border="primary">
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600"
              />
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                  "Our team is a cohesive group of talented professionals
                  inspired by ideas, creativity, and a commitment to excellence.
                </Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
            </Card>

            <Card border="primary">
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                  "Our team is a cohesive group of talented professionals
                  inspired by ideas, creativity, and a commitment to excellence.
                </Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
              <Card.Img
                variant="bottom"
                src="https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&
                cs=tinysrgb&w=600"
              />
            </Card>

            <Card border="primary">
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/3184421/pexels-photo-3184421.jpeg?auto=compress&cs=tinysrgb&w=600"
              />
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                  "Our team is a cohesive group of talented professionals
                  inspired by ideas, creativity, and a commitment to excellence.
                </Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
            </Card>
          </CardGroup>
        </Container>
      </>
    );
  }
}
