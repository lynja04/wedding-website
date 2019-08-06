import React from "react";
import logo from "../assets/AJ06272019-CE0011-NZ6_3015.jpg";
import styled from "styled-components";
import Navigation from "../navigation/Navigation";

const StyledDiv = styled.div`
  &&& {
    @import url("https://fonts.googleapis.com/css?family=Sacramento");
    font-family: "Sacramento", cursive;
    color: pink;
    font-size: 75px;
  }
`;

const HomeContainer = () => {
  return (
    <div>
      <Navigation />
      <img src={logo} className="App-logo" alt="logo" />
      <StyledDiv>Alissa & James</StyledDiv>
    </div>
  );
};

export default HomeContainer;
