import React, { useEffect, useState } from "react";
import logo from "../assets/AJ06272019-CE0011-NZ6_3015.jpg";
import styled from "styled-components";
import "../index.css";
import "typeface-sacramento";

const StyledDiv = styled.div`
  &&& {
    @media (min-width: 768px) {
      font-size: 75px;
      padding-top: 40px;
    }
    @media (max-width: 767px) {
      font-size: 2.5rem;
      padding-top: 5px;
    }
    font-family: "Sacramento", cursive;
    color: pink;
  }
`;

const StyledDiv2 = styled.div`
  &&& {
    @media (min-width: 768px) {
      font-size: 30px;
      font-weight: bold;
    }
    @media (max-width: 767px) {
      font-size: 1.5rem;
    }
    font-family: "Sacramento", cursive;
    color: pink;
    padding-top: 0;
  }
`;

const StyledImage = styled.div`
  &&& {
    @media (min-width: 768px) {
      height: 90vh;
      width: 100%;
    }
    @media (max-width: 767px) {
      height: 60vh;
      width: 100%;
    }
    background: url(${logo}) no-repeat center center;
    background-size: cover;
    z-index: -1;
  }
`;

const HomeContainer = () => {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    console.log("Fetch more list items!");
  }

  return (
    <div>
      <StyledImage>
        {" "}
        <React.Fragment>
          <StyledDiv>Alissa & James</StyledDiv>
          <StyledDiv2>6 27 2020 &nbsp; Woodbury, NY</StyledDiv2>
        </React.Fragment>
      </StyledImage>
      <StyledDiv
        style={{ fontWeight: "bold", fontSize: "30px", paddingTop: "0px" }}
      >
        Scroll to see how we met!
      </StyledDiv>
      <StyledDiv
        style={{ fontWeight: "bold", fontSize: "30px", paddingTop: "0px" }}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </StyledDiv>
    </div>
  );
};

export default HomeContainer;
