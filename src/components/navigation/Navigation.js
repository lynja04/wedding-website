import React from "react";
import { Nav, Navbar } from "react-bootstrap";
const Navigation = () => {
  return (
    <Navbar sticky="top" bg="light" variant="light">
      <Navbar.Brand href="/home">A & J</Navbar.Brand>
      <Nav className={"mr-auto"}>
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/our-wedding">Our Wedding</Nav.Link>
        <Nav.Link href="/how-we-met">Our Story</Nav.Link>
        <Nav.Link href="/photos">Photos</Nav.Link>
        <Nav.Link href="/registry">Registry</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
