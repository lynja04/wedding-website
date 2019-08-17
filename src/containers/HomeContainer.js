import React, { useEffect, useState } from "react";
import logo from "../assets/AJ06272019-CE0011-NZ6_3015.jpg";
import styled from "styled-components";
import "typeface-sacramento";
import OurStoryContainer from "./OurStoryContainer";

const NameHeading = styled.div`
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

const DateAndVenueTitle = styled.div`
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

const LandingImage = styled.div`
  &&& {
    @media (min-width: 768px) {
      height: 100vh;
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
      <LandingImage>
        {" "}
        <React.Fragment>
          <NameHeading>Alissa & James</NameHeading>
          <DateAndVenueTitle>6 27 2020 &nbsp; Woodbury, NY</DateAndVenueTitle>
        </React.Fragment>
      </LandingImage>
      <OurStoryContainer />
    </div>
  );
};

export default HomeContainer;
