import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChurch,
  faGlassCheers,
  faUtensils,
  faHourglassEnd,
  faCoffee
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
      height: 105vh;
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

const OurWeddingComponent = () => {
  return (
    <div id={"our-wedding"}>
      <div>
        <LandingImage>
          <TextStyle>Our Wedding</TextStyle>
          <VerticalTimeline>
            <VerticalTimelineElement
              style={{ textAlign: "left" }}
              className="vertical-timeline-element--work"
              date="7:30pm"
              iconStyle={{ background: "pink", color: "#fff" }}
              icon={
                <FontAwesomeIcon style={{ width: "1.5rem" }} icon={faChurch} />
              }
            >
              <h3 className="vertical-timeline-element-title">
                Ceremony at The Fox Hollow
              </h3>
              {/*<h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>*/}
              {/*<p>*/}
              {/*  Creative Direction, User Experience, Visual Design, Project*/}
              {/*  Management, Team Leading*/}
              {/*</p>*/}
            </VerticalTimelineElement>
            <VerticalTimelineElement
              style={{ textAlign: "left" }}
              className="vertical-timeline-element--work"
              date="8:30pm"
              iconStyle={{ background: "pink", color: "#fff" }}
              icon={
                <FontAwesomeIcon
                  style={{ width: "1.5rem" }}
                  icon={faGlassCheers}
                />
              }
            >
              <h3 className="vertical-timeline-element-title">Cocktail Hour</h3>
              {/*<h4 className="vertical-timeline-element-subtitle">*/}
              {/*  Cocktail Hour*/}
              {/*</h4>*/}
              {/*<p>*/}
              {/*  Creative Direction, User Experience, Visual Design, SEO, Online*/}
              {/*  Marketing*/}
              {/*</p>*/}
            </VerticalTimelineElement>
            <VerticalTimelineElement
              style={{ textAlign: "left" }}
              className="vertical-timeline-element--work"
              date="9:30pm"
              iconStyle={{ background: "pink", color: "#fff" }}
              icon={
                <FontAwesomeIcon
                  style={{ width: "1.5rem" }}
                  icon={faUtensils}
                />
              }
            >
              <h3 className="vertical-timeline-element-title">Reception</h3>
              {/*<h4 className="vertical-timeline-element-subtitle">*/}
              {/*  Los Angeles, CA*/}
              {/*</h4>*/}
              {/*<p>User Experience, Visual Design</p>*/}
            </VerticalTimelineElement>
            <VerticalTimelineElement
              style={{ textAlign: "left" }}
              className="vertical-timeline-element--work"
              date="1:30am"
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
              {/*<h4 className="vertical-timeline-element-subtitle">*/}
              {/*  San Francisco, CA*/}
              {/*</h4>*/}
              {/*<p>User Experience, Visual Design</p>*/}
            </VerticalTimelineElement>
            <VerticalTimelineElement
              style={{ textAlign: "left" }}
              className="vertical-timeline-element--education"
              date="7:00am-10:30am"
              iconStyle={{ background: "pink", color: "#fff" }}
              icon={
                <FontAwesomeIcon style={{ width: "1.5rem" }} icon={faCoffee} />
              }
            >
              <h3 className="vertical-timeline-element-title">
                Brunch at The Fox Hollow Hotel
              </h3>
              {/*<h4 className="vertical-timeline-element-subtitle">*/}
              {/*  Online Course*/}
              {/*</h4>*/}
              {/*<p>Strategy, Social Media</p>*/}
            </VerticalTimelineElement>
          </VerticalTimeline>
        </LandingImage>
      </div>
    </div>
  );
};

export default OurWeddingComponent;
