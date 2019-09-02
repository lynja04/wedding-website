import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const LandingImage = styled.div`
  &&& {
    @media (min-width: 768px) {
      width: 100%;
      height: 150vh;
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
      font-size: 100px;
    }
    @media (max-width: 767px) {
      font-size: 2.5rem;
    }
    text-align: center;
    font-family: "Sacramento", cursive;
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
              className="vertical-timeline-element--work"
              date="7:30pm"
              iconStyle={{ background: "pink", color: "#fff" }}
              icon={<FontAwesomeIcon icon="coffee" />}
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
              className="vertical-timeline-element--work"
              date="8:30pm"
              iconStyle={{ background: "pink", color: "#fff" }}
              icon={<FontAwesomeIcon icon="coffee" />}
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
              className="vertical-timeline-element--work"
              date="9:30pm"
              iconStyle={{ background: "pink", color: "#fff" }}
              icon={<FontAwesomeIcon icon="coffee" />}
            >
              <h3 className="vertical-timeline-element-title">Reception</h3>
              {/*<h4 className="vertical-timeline-element-subtitle">*/}
              {/*  Los Angeles, CA*/}
              {/*</h4>*/}
              {/*<p>User Experience, Visual Design</p>*/}
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="1:30am"
              iconStyle={{ background: "pink", color: "#fff" }}
              icon={<FontAwesomeIcon icon="coffee" />}
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
              className="vertical-timeline-element--education"
              date="7:00am-10:30am"
              iconStyle={{ background: "pink", color: "#fff" }}
              icon={<FontAwesomeIcon icon="coffee" />}
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
