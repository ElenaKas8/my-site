import React, { Component } from 'react';
import { Container, Row, Tab,Col,Nav, } from 'react-bootstrap';


export default class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id="ledt-tabs-example" defaultactiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column" mt-2>
                <Nav.Item>
                  <Nav.Link eventKey="first">Design</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Team</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Programming</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className="mt-3">
                <Tab.Pane eventKey="first">
                  <img
                    className="d-block w-50"
                    src="https://images.pexels.com/photos/1212407/pexels-photo-1212407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="about our team"
                  />
                  <p>
                    "Our team is a cohesive group of talented professionals
                    inspired by ideas, creativity, and a commitment to
                    excellence. Together, we innovate and achieve success."
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <img
                    src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600"
                    className="d-block w-50"
                    alt="about our team"
                  />
                  <p>
                    "Our team is a cohesive group of talented professionals
                    inspired by ideas, creativity, and a commitment to
                    excellence. Together, we innovate and achieve success."
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <img
                    src="https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className="d-block w-50"
                    alt="about our team"
                  />
                  <p>
                    "Our team is a cohesive group of talented professionals
                    inspired by ideas, creativity, and a commitment to
                    excellence. Together, we innovate and achieve success."
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <img
                    src="https://www.gurutechnolabs.com/wp-content/uploads/2020/07/Top-web-app-frameworks.webp"
                    className="d-block w-50"
                    alt="about our team"
                  />
                  <p>
                    "Our team is a cohesive group of talented professionals
                    inspired by ideas, creativity, and a commitment to
                    excellence. Together, we innovate and achieve success."
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <img
                    src="https://images.pexels.com/photos/261909/pexels-photo-261909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className="d-block w-50"
                    alt="about our team"
                  />
                  <p>
                    "Our team is a cohesive group of talented professionals
                    inspired by ideas, creativity, and a commitment to
                    excellence. Together, we innovate and achieve success."
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    );
  }
}

