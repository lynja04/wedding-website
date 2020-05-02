import React from "react";
import styled from "styled-components";
import ourstory1 from "../assets/ourstory1.png";
import ourstory2 from "../assets/ourstory2.png";
import ourstory3 from "../assets/ourstory3.png";
import "typeface-sacramento";
import "../fonts.css";

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
    @media (min-width: 768px) {
      font-size: 80px;
    }
    @media (max-width: 767px) {
      font-size: 2.5rem;
    }
    text-align: center;
    font-family: "Shadows Into Light Two", cursive;
  }
`;

const TextStyle2 = styled.div.attrs(() => ({}))`
  &&& {
    @media (min-width: 768px) {
      font-size: 35px;
    }
    @media (max-width: 767px) {
      font-size: 1.5rem;
    }
    text-align: center;
    font-family: "Shadows Into Light Two", cursive;
  }
`;

const FirstImageStyle = styled.img`
  &&& {
    @media (min-width: 768px) {
      width: 475px;
      height: 550px;
    }

    @media (max-width: 767px) {
      width: 375px;
      height: 400px;
    }

    z-index: 2;
    border: solid 8px #fff;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
  }
`;

const SecondImageStyle = styled.img`
  &&& {
    @media (min-width: 768px) {
      padding-left: 5px;
      width: 450px;
      height: 550px;
    }

    @media (max-width: 767px) {
      width: 375px;
      height: 485px;
    }

    z-index: 2;
    border: solid 8px #fff;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
  }
`;

const ThirdImageStyle = styled.img`
  &&& {
    @media (min-width: 768px) {
      padding-left: 5px;
      width: 500px;
      height: 550px;
    }

    @media (max-width: 767px) {
      width: 375px;
      height: 425px;
    }
    z-index: 2;
    border: solid 8px #fff;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
  }
`;

const ContainerStyle = styled.div.attrs(() => ({
  id: "our-story"
}))`
  &&& {
    @media (min-width: 768px) {
      padding-top: 40px;
    }

    @media (max-width: 767px) {
      padding-top: 100px;
    }
  }
`;

const OurStoryComponent = () => {
  return (
    <ContainerStyle>
      <LandingImage>
        <div>
          <TextStyle>How we met...</TextStyle>
        </div>
        <div className={"d-flex ml-5 mr-5"}>
          <TextStyle2>
            Alissa and James first met in Nursery School at St. Johns Lutheran
            Church! They became friends and their moms always chatted during
            pick up and drop off. Fast forward 10 years, Alissa and James were
            both in Lindenhurst High School. They began talking and realized
            they were in the same first period English Class! James began
            sitting with Alissa at the lunch table, and walked with her to her
            classes. One month later on October 22nd, 2010 James asked Alissa to
            be his girlfriend. Their love for each other grew with time as they
            spent more time together. From graduating high school, to graduating
            college and moving into their first apartment they have always stood
            by each other's side. On September 29th, 2018 James proposed to
            Alissa in their apartment, and the rest is history!
          </TextStyle2>
        </div>
        <div className={"d-flex p-5 justify-content-center flex-wrap"}>
          <div>
            <FirstImageStyle src={ourstory1} alt={""} />
          </div>
          <div>
            <SecondImageStyle src={ourstory2} alt={""} />
          </div>
          <div>
            <ThirdImageStyle src={ourstory3} alt={""} />
          </div>
        </div>
      </LandingImage>
    </ContainerStyle>
  );
};

export default OurStoryComponent;
