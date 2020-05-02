import React, { useEffect, useState } from "react";
import logo from "../assets/AJ06272019-CE0011-NZ6_3015.jpg";
import styled from "styled-components";
import "typeface-sacramento";
import "../fonts.css";
import OurStoryContainer from "./OurStoryContainer";
import OurWeddingContainer from "./OurWeddingContainer";
import PhotosContainer from "./PhotosContainer";
import HotelInfoContainer from "./HotelInfoContainer";

const NameHeading = styled.div`
  &&& {
    @media (min-width: 768px) {
      font-size: 80px;
      padding-top: 60px;
    }
    @media (max-width: 767px) {
      font-size: 2.5rem;
    }
    font-family: "Shadows Into Light Two", cursive;
  }
`;

const DateAndVenueTitle = styled.div`
  &&& {
    @media (min-width: 768px) {
      font-size: 35px;
    }
    @media (max-width: 767px) {
      font-size: 1.5rem;
    }
    font-family: "Shadows Into Light Two", cursive;
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
      height: 100vh;
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
      height: 725px;
    }
    @media (max-width: 767px) {
      margin-top: 75px;
      width: 100%;
      height: 280px;
    }
    background: url(https://d3t14gfu9ehll4.cloudfront.net/themes/7978c9cf-9203-4b82-beed-80cddde83d13/undefined_jDGuvDG.png)
      repeat center center;
    background-size: cover;
    z-index: 5;
  }
`;

const ImageContainer = styled.div`
  &&& {
    @media (min-width: 768px) {
      width: 100%;
    }
    @media (max-width: 767px) {
      width: 100%;
    }
  }
`;

const StyledCoverImage = styled.img`
  &&& {
    @media (min-width: 768px) {
      width: 900px;
      height: 600px;
    }

    @media (max-width: 767px) {
      width: 375px;
      height: 270px;
    }

    border: solid 8px #fff;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
    margin-top: 10px;
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
        <LandingImage2>
          <div style={{ paddingTop: "85px" }}>
            <NameHeading>Alissa & James</NameHeading>
            <DateAndVenueTitle>
              06.06.2021 &nbsp; Woodbury, NY
            </DateAndVenueTitle>
            <ImageContainer>
              <StyledCoverImage src={logo} />
            </ImageContainer>
            <OurStoryContainer />
            <OurWeddingContainer />
            <HotelInfoContainer />
            <PhotosContainer />
          </div>
        </LandingImage2>
      </LandingImage>
    </div>
  );
};

export default HomeContainer;
