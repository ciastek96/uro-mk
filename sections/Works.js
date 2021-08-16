import React from "react";
import styled from "styled-components";
import Heading from "../components/Heading/Heading";

const Wrapper = styled.section`
  max-width: 1440px;
  margin: 0 auto;
  height: 200%;
  position: relative;
  padding: 1rem;
`;

const Works = () => (
  <Wrapper id="realizacje">
    <Heading>realizacje</Heading>
  </Wrapper>
);

export default Works;
