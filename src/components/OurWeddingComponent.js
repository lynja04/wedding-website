import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChurch,
  faGlassCheers,
  faUtensils,
  faHourglassEnd,
  faCoffee,
  faCompass
} from "@fortawesome/free-solid-svg-icons";
import "../fonts.css";

import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const LandingImage = styled.div`
  &&& {
    @media (min-width: 768px) {
      width: 100%;
      height: 110vh;
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

const ContainerStyle = styled.div.attrs(() => ({
  id: "our-wedding"
}))`

`;

const AddressStyle = styled.div`
  &&& {
    @media (min-width: 768px) {
      font-size: 50px;
    }
    @media (max-width: 767px) {
      font-size: 2.2rem;
    }
    text-align: center;
    font-family: "Shadows Into Light Two", cursive;
  }
`;

const openMap = () => {
  window.open(
    "https://www.google.com/maps/place/The+Fox+Hollow/@40.813782,-73.4873767,17z/data=!3m1!4b1!4m8!3m7!1s0x89c282170e244853:0xd34f7fb061cb167c!5m2!4m1!1i2!8m2!3d40.813782!4d-73.485188"
  );
};

const ViewMapComponent = () => {
  return (
    <div
      style={{
        paddingTop: "15px",
        fontSize: "20px",
        fontFamily: "Shadows Into Light Two ,cursive"
      }}
      onClick={openMap}
    >
      <span className={"pr-1"}>Click to View Map</span>
      <FontAwesomeIcon icon={faCompass} />
    </div>
  );
};

const OurWeddingComponent = () => {
  return (
    <ContainerStyle>
      <div>
        <LandingImage>
          <TextStyle>Our Wedding at The Fox Hollow</TextStyle>
          <AddressStyle>7725 Jericho Turnpike, Woodbury, NY 11797</AddressStyle>
          <ViewMapComponent />
          <VerticalTimeline>
            <VerticalTimelineElement
              style={{ textAlign: "left" }}
              className="vertical-timeline-element--work"
              date="5:00pm"
              iconStyle={{ background: "pink", color: "#fff" }}
              icon={
                <FontAwesomeIcon style={{ width: "1.5rem" }} icon={faChurch} />
              }
            >
              <h3 className="vertical-timeline-element-title">
                Ceremony at The Fox Hollow
              </h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              style={{ textAlign: "left" }}
              className="vertical-timeline-element--work"
              date="6:00pm"
              iconStyle={{ background: "pink", color: "#fff" }}
              icon={
                <FontAwesomeIcon
                  style={{ width: "1.5rem" }}
                  icon={faGlassCheers}
                />
              }
            >
              <h3 className="vertical-timeline-element-title">Cocktail Hour</h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              style={{ textAlign: "left" }}
              className="vertical-timeline-element--work"
              date="7:00pm"
              iconStyle={{ background: "pink", color: "#fff" }}
              icon={
                <FontAwesomeIcon
                  style={{ width: "1.5rem" }}
                  icon={faUtensils}
                />
              }
            >
              <h3 className="vertical-timeline-element-title">
                Reception in the Winter Garden
              </h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              style={{ textAlign: "left" }}
              className="vertical-timeline-element--work"
              date="11:00am"
              iconStyle={{ background: "pink", color: "#fff" }}
              icon={
                <FontAwesomeIcon
                  style={{ width: "1.5rem" }}
                  icon={faHourglassEnd}
                />
              }
            >
              <h3 className="vertical-timeline-element-title">
                Reception Ends
              </h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              style={{ textAlign: "left" }}
              className="vertical-timeline-element--education"
              date="6:00am-9:30am"
              iconStyle={{ background: "pink", color: "#fff" }}
              icon={
                <FontAwesomeIcon style={{ width: "1.5rem" }} icon={faCoffee} />
              }
            >
              <h3 className="vertical-timeline-element-title">
                Morning after Brunch at the Inn at Fox Hollow
              </h3>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </LandingImage>
      </div>
    </ContainerStyle>
  );
};

export default OurWeddingComponent;
