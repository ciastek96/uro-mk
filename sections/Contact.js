import React from "react";
import styled from "styled-components";
import Heading from "../components/Heading/Heading";

const Wrapper = styled.section`
  max-width: 1440px;
  margin: 0 auto;
  border: 1px solid red;
  height: 200%;
  position: relative;
  padding: 1rem;
`;

const Contact = () => (
  <Wrapper id="kontakt">
    <Heading>kontakt</Heading>
  </Wrapper>
);

export default Contact;
