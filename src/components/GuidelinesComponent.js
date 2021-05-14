import React, { useState } from "react";
import styled from "styled-components";
import "typeface-sacramento";
import { useFirebase } from "../contexts/FirebaseContext";
import "../fonts.css";
import { useAlert } from 'react-alert';

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

const TextStyle2 = styled.div.attrs(() => ({ className: "ml-5" }))`
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

const ContainerStyle = styled.div.attrs(() => ({
    id: "guidelines"
}))`
`;

const GuidelinesComponent = () => {
    return (
        <ContainerStyle>
            <LandingImage>
                <div>
                    <TextStyle>COVID-19 Guidelines</TextStyle>
                </div>
                <div className={"d-flex justify-content-center align-items-center"}>
                    <TextStyle2>
                        As of May 19th, testing and proof of vaccination will NOT be required at the wedding.
                        Masks and social distancing will be enforced by the venue. Masks must be worn at all times except for when seated at a table.
                    </TextStyle2>
                </div>
            </LandingImage>
        </ContainerStyle>
    );
};

export default GuidelinesComponent;
