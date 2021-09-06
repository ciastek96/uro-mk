import React, { useState } from "react";
import styled from "styled-components";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import RoundButton from "../RoundButton/RoundButton";
import AngleUp from "../icons/AngleUp";

const StyledRoundButton = styled(RoundButton)`
  box-shadow: 0 0px 30px -8px hsla(0, 0%, 0%, 0.3);
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  transform: translateY(${({ isVisible }) => (isVisible ? "0" : "200%")});
  transition: transform 0.2s ease-in-out, opacity 0.3s ease-in-out;

  position: fixed;
  bottom: 1rem;
  right: 1rem;
`;

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
    <StyledRoundButton onClick={scrollToTop} isVisible={isVisible}>
      <AngleUp />
    </StyledRoundButton>
  );
};

export default ScrollToTop;
