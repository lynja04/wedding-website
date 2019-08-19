import React from "react";
import styled from "styled-components";
import ourstory1 from "../assets/ourstory1.png";
import ourstory2 from "../assets/ourstory2.png";
import ourstory3 from "../assets/ourstory3.png";
import "typeface-sacramento";

const LandingImage = styled.div`
  &&& {
    @media (min-width: 768px) {
      width: 100%;
    }
    @media (max-width: 767px) {
      width: 100%;
    }
    background: url(https://d3t14gfu9ehll4.cloudfront.net/themes/9d5c43bc-4fb7-45e6-8a9e-0f19ecf8f022/undefined_guCXJqL.png)
      repeat center center;
    background-size: cover;
    z-index: 2;
  }
`;

const TextStyle = styled.div.attrs(() => ({}))`
  &&& {
    text-align: center;
    font-family: "Sacramento", cursive;
    font-size: 35px;
  }
`;

const ImageStyle1 = {
  width: "425px",
  height: "375px",
  zIndex: "2",
  border: "solid 8px #fff",
  boxShadow: "0 1px 4px rgba(0, 0, 0, 0.25)"
};

const ImageStyle2 = {
  width: "425px",
  height: "500px",
  zIndex: "2",
  border: "solid 8px #fff",
  boxShadow: "0 1px 4px rgba(0, 0, 0, 0.25)"
};

const ImageStyle3 = {
  width: "425px",
  height: "550px",
  zIndex: "2",
  border: "solid 8px #fff",
  boxShadow: "0 1px 4px rgba(0, 0, 0, 0.25)"
};

const OurStoryComponent = () => {
  return (
    <div id={"our-story"}>
      <LandingImage>
        <div style={{ paddingTop: "50px" }}>
          <TextStyle style={{ fontSize: "100px" }}>How we met...</TextStyle>
        </div>
        <div className={"d-flex ml-5 mr-5"}>
          <TextStyle>
            Alissa and James first met in Nursery School at St. Johns Lutheran
            Church! They became friends and their moms always chatted when
            dropping off and picking them up. Fast forward 10 years, Alissa and
            James were both in Lindenhurst High School. They began talking and
            realized they were in the same first period English Class, along
            with the Best Man! James began sitting with Alissa at the lunch
            table, and they continued talking on Facebook Messenger at night.
            One month later on October 22nd, 2010 James asked Alissa to go out.
            Their love for each other grew as they spent more time together.
            From graduating high school, to graduating college and moving into
            their first apartment together they have always supported each
            other. On September 29th, 2018 James proposed to Alissa in their
            apartment.
          </TextStyle>
        </div>
        <div className={"d-flex p-5 justify-content-center"}>
          <div>
            <img style={ImageStyle1} src={ourstory1} alt={""} />
          </div>
          <div className={"pl-5"}>
            <img style={ImageStyle2} src={ourstory2} alt={""} />
          </div>
          <div className={"pl-5"}>
            <img style={ImageStyle3} src={ourstory3} alt={""} />
          </div>
        </div>
      </LandingImage>
    </div>
  );
};

export default OurStoryComponent;
