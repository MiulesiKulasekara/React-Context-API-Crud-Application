import React from "react";
import { Navbar, Nav,Container } from "react-bootstrap";
import { Link } from "react-router-dom";


const Heading = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/" className="ms-2">My Team</Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Item className="me-2" style={{backgroundColor:"#009AEE", borderRadius:"4px"}}>
            <Nav.Link  href="/add" style={{color:"white"}}>
              Add a User
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Heading;
