import React from "react";
import logo from "./assets/AJ06272019-CE0011-NZ6_3015.jpg";
import "./App.css";
import "./index.css";
import styled from "styled-components";

const StyledDiv = styled.div`
  &&& {
    @import url("https://fonts.googleapis.com/css?family=Sacramento");
    font-family: "Sacramento", cursive;
    color: pink;
    font-size: 75px;
  }
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <StyledDiv>Alissa & James</StyledDiv>
      </header>
    </div>
  );
}

export default App;
