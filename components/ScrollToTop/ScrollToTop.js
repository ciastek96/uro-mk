import React, { useState } from "react";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import styled from "styled-components";
import AngleUp from "../icons/AngleUp";

const size = "48px";

const Button = styled.button`
  width: ${size};
  height: ${size};
  border-radius: ${size};
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  border: 0;
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.yellow};
  box-shadow: 0 0px 30px -8px hsla(0, 0%, 0%, 0.3);
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  transform: translateY(${({ isVisible }) => (isVisible ? "0" : "200%")});
  transition: transform 0.2s ease-in-out, opacity 0.3s ease-in-out;

  &:hover {
    filter: brightness(110%);
  }
`;

const StyledAngleUp = styled(AngleUp)`
  width: 40%;
  fill: white;
`;

let renderCount = 0;

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useScrollPosition(
    ({ currPos }) => {
      const isShow = currPos.y <= window.innerHeight / -10;
      if (isShow !== isVisible) setIsVisible(isShow);
    },
    [isVisible]
  );

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Button onClick={scrollToTop} isVisible={isVisible}>
      <StyledAngleUp />
    </Button>
  );
};

export default ScrollToTop;
