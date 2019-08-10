import React from "react";
import { Nav, Navbar } from "react-bootstrap";
const Navigation = () => {
  const openGithub = () => {
    window.open("https://github.com/lynja04/wedding-website");
  };
  return (
    <Navbar sticky="top" bg="light" variant="light">
      <Navbar.Brand href="/">A & J</Navbar.Brand>
      <Nav className={"mr-auto"}>
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/our-wedding">Our Wedding</Nav.Link>
        <Nav.Link href="/how-we-met">Our Story</Nav.Link>
        <Nav.Link href="/photos">Photos</Nav.Link>
        <Nav.Link href="/registry">Registry</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link>Created by J. Lynn</Nav.Link>
        <Nav.Link onClick={openGithub}>Source Code</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
