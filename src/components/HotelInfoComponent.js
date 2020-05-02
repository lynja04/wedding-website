import React from "react";
import styled from "styled-components";
import hotelpic from "../assets/hotelpic.jpeg";

const ContainerStyle = styled.div.attrs(() => ({
  id: "hotel-info"
}))`
  &&& {
    @media (min-width: 768px) {
      padding-top: 25px;
    }

    @media (max-width: 767px) {
      padding-top: 40px;
    }
  }
`;

const LandingImage = styled.div`
  &&& {
    @media (min-width: 768px) {
      height: 80vh;
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

const TextStyle2 = styled.div`
  &&& {
    @media (min-width: 768px) {
      font-size: 35px;
    }
    @media (max-width: 767px) {
      font-size: 2.2rem;
    }
    text-align: center;
    font-family: "Shadows Into Light Two", cursive;
  }
`;

const TextStyle3 = styled.div`
  &&& {
    @media (min-width: 768px) {
      font-size: 35px;
    }
    @media (max-width: 767px) {
      font-size: 2.2rem;
    }
    text-align: center;
    font-family: "Shadows Into Light Two", cursive;
  }

  &:hover {
    cursor: pointer;
  }
`;

const FirstImageStyle = styled.img`
  &&& {
    @media (min-width: 768px) {
      width: 500px;
      height: 350px;
    }

    @media (max-width: 767px) {
      width: 375px;
      height: 250px;
    }

    z-index: 2;
    border: solid 8px #fff;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
  }
`;

const openFoxHollow = () => {
  window.open(
    "https://gc.synxis.com/rez.aspx?Hotel=11937&Chain=14549&arrive=6/27/2020&depart=6/28/2020&adult=1&child=0&group=270620MONTA"
  );
};

const HotelInfoComponent = () => {
  return (
    <ContainerStyle>
      <LandingImage>
        <TextStyle>Hotel Information</TextStyle>
        <div>
          <FirstImageStyle src={hotelpic} alt={""} />
        </div>
        <div style={{ paddingTop: "20px" }}>
        <TextStyle2 style={{ color: "red" }}>
            *All previous hotel bookings have be canceled. You must rebook
          </TextStyle2>
          <TextStyle2>
            A hotel block has been secured at the Inn at Fox Hollow for
            $229/night
          </TextStyle2>
          <TextStyle2 style={{ color: "red" }}>
            *Must be booked by May 6th 2021
          </TextStyle2>
          {/* <TextStyle3 style={{ color: "blue" }} onClick={openFoxHollow}>
            You can book online by clicking on this text
          </TextStyle3> */}
          <TextStyle2>
            or call 516-224-8100 with reference to group name: Montalbano/Lynn
            Wedding
          </TextStyle2>
        </div>
      </LandingImage>
    </ContainerStyle>
  );
};

export default HotelInfoComponent;