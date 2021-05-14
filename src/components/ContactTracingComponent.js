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
  }
`;

const ContainerStyle = styled.div.attrs(() => ({
    id: "contact-tracing"
}))`
`;

const ContactTracingComponent = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dob, setDob] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const { database } = useFirebase();
    const alert = useAlert();

    const onSubmit = () => {
        const contactsRef = database.ref("contact");
        const newContactRef = contactsRef.push();
        newContactRef.set({
            firstName: firstName,
            lastName: lastName,
            dob: dob,
            phone: phone,
            email: email
        });
        alert.show('Thank you for submitting your information');
        setFirstName("");
        setLastName("");
        setDob("");
        setPhone("");
        setEmail("");
    }

    return (
        <ContainerStyle>
            <LandingImage>
                <div>
                    <TextStyle>Contact Tracing Information</TextStyle>
                </div>
                <div className={"d-flex justify-content-center align-items-center"}>
                    <TextStyle2>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            onSubmit();
                        }}>
                            <div className="d-flex">
                                <div className={"mr-2"}><label>First Name: </label></div>
                                <input type="text" value={firstName} onChange={(e) => { setFirstName(e.target.value) }} />
                            </div>
                            <div className="d-flex">
                                <div className={"mr-2"}><label>Last Name: </label></div>
                                <input type="text" value={lastName} onChange={(e) => { setLastName(e.target.value) }} />
                            </div>
                            <div className="d-flex">
                                <div className={"mr-2"}><label>Date of birth (01/01/1999): </label></div>
                                <input type="text" value={dob} onChange={(e) => { setDob(e.target.value) }} />
                            </div>
                            <div className="d-flex">
                                <div className={"mr-2"}><label>Phone Number (631-555-5555): </label></div>
                                <input type="text" value={phone} onChange={(e) => { setPhone(e.target.value) }} />
                            </div>
                            <div className="d-flex">
                                <div className={"mr-2"}><label>Email Address (email@address.com): </label></div>
                                <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                            </div>
                            <input type="submit" value="Submit" />
                        </form>
                    </TextStyle2>
                </div>
            </LandingImage>
        </ContainerStyle>
    );
};

export default ContactTracingComponent;
