import React, { useEffect, useState } from "react";
import logo from "../assets/AJ06272019-CE0011-NZ6_3015.jpg";
import styled from "styled-components";
import "typeface-sacramento";
import OurStoryContainer from "./OurStoryContainer";
import OurWeddingContainer from "./OurWeddingContainer";

const NameHeading = styled.div`
  &&& {
    @media (min-width: 768px) {
      font-size: 65px;
      padding-top: 40px;
    }
    @media (max-width: 767px) {
      font-size: 2.5rem;
      padding-top: 5px;
    }
    font-family: "Sacramento", cursive;
  }
`;

const DateAndVenueTitle = styled.div`
  &&& {
    @media (min-width: 768px) {
      font-size: 25px;
      font-weight: bold;
    }
    @media (max-width: 767px) {
      font-size: 1.5rem;
    }
    font-family: "Sacramento", cursive;
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
    background: url(https://d3t14gfu9ehll4.cloudfront.net/themes/9d5c43bc-4fb7-45e6-8a9e-0f19ecf8f022/undefined_guCXJqL.png)
      no-repeat center center;
    background-size: cover;
    z-index: 1;
  }
`;

const LandingImage2 = styled.div`
  &&& {
    @media (min-width: 768px) {
      width: 100%;
    }
    @media (max-width: 767px) {
      width: 100%;
    }
    background: url(https://d3t14gfu9ehll4.cloudfront.net/themes/7978c9cf-9203-4b82-beed-80cddde83d13/undefined_jDGuvDG.png)
      repeat center center;
    background-size: cover;
    z-index: 5;
    height: 600px;
  }
`;

const ImageStyle = {
  width: "900px",
  height: "600px",
  zIndex: "2",
  border: "solid 8px #fff",
  boxShadow: "0 1px 4px rgba(0, 0, 0, 0.25)",
  marginTop: "10px"
};

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
        <LandingImage2>
          <div style={{ paddingTop: "85px" }}>
            <NameHeading>Alissa & James</NameHeading>
            <DateAndVenueTitle>6 27 2020 &nbsp; Woodbury, NY</DateAndVenueTitle>
            <img style={ImageStyle} src={logo} />
          </div>
        </LandingImage2>
      </LandingImage>
      <OurStoryContainer />
      <OurWeddingContainer />
    </div>
  );
};

export default HomeContainer;
