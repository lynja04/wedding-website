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
      "https://be.synxis.com/?adult=1&arrive=2021-06-06&chain=14549&child=0&currency=USD&depart=2021-06-07&group=300420MONTA&hotel=11937&level=hotel&locale=en-US&rooms=1"
    );
  };

  const openRegistry = () => {
    window.open("http://www.zola.com/registry/jamesandalissa2020");
  };

  return (
    <Navbar fixed="top" bg="light" variant="light">
      <Navbar.Brand href="/">A & J</Navbar.Brand>
      <Nav className={"mr-auto"}>
        <Nav.Link href="#contact-tracing">Contact Tracing</Nav.Link>
        <Nav.Link href="#guidelines">Guidelines</Nav.Link>
        <Nav.Link href="#our-story">Our Story</Nav.Link>
        <Nav.Link href="#our-wedding">Our Wedding</Nav.Link>
        <Nav.Link onClick={openFoxHollow}>Hotel Rooms</Nav.Link>
        <Nav.Link href="#photos">Photos</Nav.Link>
        <Nav.Link onClick={openRegistry}>Bridal Shower Registry</Nav.Link>
      </Nav>
      <StyledNav>
        <Nav.Link>Created by J. Lynn</Nav.Link>
        <Nav.Link onClick={openGithub}>Source Code</Nav.Link>
      </StyledNav>
    </Navbar>
  );
};

export default Navigation;
