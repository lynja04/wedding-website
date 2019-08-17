import React from "react";
import styled from "styled-components";
import nurseryschoolimg from "../assets/nurseryschoolpic.jpg";
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
  }
`;

const TextStyle = styled.div.attrs(() => ({}))`
  &&& {
    text-align: center;
    font-family: "Sacramento", cursive;
    font-size: 35px;
  }
`;

const ImageStyle = {
  width: "450px",
  height: "400px",
  zIndex: "2",
  border: "solid 8px #fff",
  boxShadow: "0 1px 4px rgba(0, 0, 0, 0.25)"
};

const OurStoryComponent = () => {
  return (
    <div id={"our-story"}>
      <LandingImage>
        <div className={"pt-5"}>
          <TextStyle style={{ fontSize: "100px" }}>When we met...</TextStyle>
        </div>
        <div className={"d-flex p-2 justify-content-center"}>
          <div>
            <img style={ImageStyle} src={nurseryschoolimg} />
          </div>
          <div className={"pl-5"}>
            <TextStyle>djiosadjsaijdiosajdiosjdsajp</TextStyle>
          </div>
        </div>
        <div className={"d-flex p-5 justify-content-center"}>
          <div className={"pl-5"}>
            <TextStyle>djiosadjsaijdiosajdiosjdsajp</TextStyle>
          </div>
          <div className={"pl-5"}>
            <img style={ImageStyle} src={nurseryschoolimg} />
          </div>
        </div>
        <div className={"d-flex p-2 justify-content-center"}>
          <div>
            <img style={ImageStyle} src={nurseryschoolimg} />
          </div>
          <div className={"pl-5"}>
            <TextStyle>djiosadjsaijdiosajdiosjdsajp</TextStyle>
          </div>
        </div>
      </LandingImage>
    </div>
  );
};

export default OurStoryComponent;
