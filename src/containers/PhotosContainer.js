import React from "react";
import "../fonts.css";
import styled from "styled-components";
import image1 from "../assets/IMG_8292.JPG";
import image2 from "../assets/IMG_8293.JPG";
import image3 from "../assets/IMG_8294.JPG";
import image4 from "../assets/IMG_8295.JPG";
import image5 from "../assets/IMG_8298.JPG";
import image6 from "../assets/IMG_8306.JPG";

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

const LandingImage = styled.div`
  &&& {
    @media (min-width: 768px) {
      width: 100%;
      height: 195;
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

const FirstImageStyle = styled.img`
  &&& {
    @media (min-width: 768px) {
      width: 750px;
      height: 500px;
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

const PhotosContainer = () => {
  return (
    <div id={"photos"}>
      <LandingImage>
        <TextStyle>Photos</TextStyle>
        <div className={"m-5 d-flex flex-wrap"}>
          <FirstImageStyle src={image1} alt={""} />
          <FirstImageStyle src={image2} alt={""} />
          <FirstImageStyle src={image3} alt={""} />
          <FirstImageStyle src={image4} alt={""} />
          <FirstImageStyle src={image5} alt={""} />
          <FirstImageStyle src={image6} alt={""} />
        </div>
      </LandingImage>
    </div>
  );
};

export default PhotosContainer;
