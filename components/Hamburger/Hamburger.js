import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.button`
  padding: 10px;
  cursor: pointer;
  background: transparent;
  border: 0;
  margin: 0;
  display: inline-block;
`;

const Box = styled.span`
  width: 35px;
  height: 24px;
  display: inline-block;
  position: relative;
`;

const InnerWrapper = styled.span`
  width: 100%;
  height: 3px;
  background-color: ${({ isOpen }) => (isOpen ? "transparent" : "white")};
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  transition: background-color 0.2s linear;

  &::after,
  &::before {
    content: "";
    width: 100%;
    height: 3px;
    position: absolute;
    background-color: white;
    transition: all 0.2s linear;
  }

  &::after {
    top: ${({ isOpen }) => (isOpen ? "0" : "-10px")};
    right: 0;
    transform: ${({ isOpen }) => (isOpen ? "rotateZ(45deg)" : "rotateZ(0)")};
  }

  &::before {
    top: ${({ isOpen }) => (isOpen ? "0" : "10px")};
    right: 0;
    transform: ${({ isOpen }) => (isOpen ? "rotateZ(-45deg)" : "rotateZ(0)")};
  }
`;

const Hamburger = () => {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <Wrapper onClick={() => setIsToggle((isToggle) => !isToggle)}>
      <Box>
        <InnerWrapper isOpen={isToggle}></InnerWrapper>
      </Box>
    </Wrapper>
  );
};

export default Hamburger;
