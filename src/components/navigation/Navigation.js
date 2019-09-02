import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

const StyledNav = styled(Nav)`
  &&& {
    @media screen and (max-width: 767px) {
      visibility: hidden;
      clear: both;
      float: left;
      margin: 10px auto 5px 20px;
      width: 28%;
      display: none;
    }
  }
`;

const Navigation = () => {
  const openGithub = () => {
    window.open("https://github.com/lynja04/wedding-website");
  };

  const openFoxHollow = () => {
    window.open(
      "https://gc.synxis.com/rez.aspx?Hotel=11937&Chain=14549&arrive=6/27/2020&depart=6/28/2020&adult=1&child=0&group=270620MONTA"
    );
  };
  return (
    <Navbar sticky="top" bg="light" variant="light">
      <Navbar.Brand href="/">A & J</Navbar.Brand>
      <Nav className={"mr-auto"}>
        <Nav.Link href="#our-story">Our Story</Nav.Link>
        <Nav.Link href="#our-wedding">Our Wedding</Nav.Link>
        <Nav.Link onClick={openFoxHollow}>Book Hotel Room</Nav.Link>
        <Nav.Link href="/photos">Photos</Nav.Link>
        <Nav.Link href="/registry">Registry</Nav.Link>
      </Nav>
      <StyledNav>
        <Nav.Link>Created by J. Lynn</Nav.Link>
        <Nav.Link onClick={openGithub}>Source Code</Nav.Link>
      </StyledNav>
    </Navbar>
  );
};

export default Navigation;
