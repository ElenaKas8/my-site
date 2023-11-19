import React, { Component } from 'react'
import { Button, Container, Form, FormControl, Navbar,Nav} from 'react-bootstrap'
import logo from './logo192.png'
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";



import Home from '../pages/Home';
import About from "../pages/About";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";

const pages = [
   { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
  { title: "Blog", path: "/blog" },
];

export default class Header extends Component {
  render() {
      return (
        <>
          <Navbar
            sticky="top"
            collapseOnSelect
            expand="md"
            bg="dark"
            variant="dark"
          >
            <Container>
              <Navbar.Brand href="/">
                <img
                  src={logo}
                  height="30"
                  width="30"
                  className="d-inline-block-align-top"
                  alt="Logo"
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav" />
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
                <Nav.Link href="/blog">Blog</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-info">Search</Button>
              </Form>
            </Container>
          </Navbar>
          <Router>
            <Routes>
                      <Route exact path="/" element={<Home pages={pages} />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/blog" element={<Blog />} />
            </Routes>
          </Router>
        </>
      );
  }
}
