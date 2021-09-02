import React, { useContext } from "react";
import styled from "styled-components";
import Context from "../../Context/Context";

const Wrapper = styled.button`
  padding: 10px;
  cursor: pointer;
  background: transparent;
  border: 0;
  margin: 0;
  display: grid;
  place-items: center;
`;

const Box = styled.span`
  width: 24px;
  height: 24px;
  display: inline-block;
  position: relative;
`;

const InnerWrapper = styled.span`
  width: 100%;
  height: 2px;
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
    height: 2px;
    position: absolute;
    background-color: white;
    transition: all 0.2s linear;
  }

  &::after {
    top: ${({ isOpen }) => (isOpen ? "0" : "-6px")};
    right: 0;
    transform: ${({ isOpen }) => (isOpen ? "rotateZ(45deg)" : "rotateZ(0)")};
  }

  &::before {
    top: ${({ isOpen }) => (isOpen ? "0" : "6px")};
    right: 0;
    transform: ${({ isOpen }) => (isOpen ? "rotateZ(-45deg)" : "rotateZ(0)")};
  }
`;

const Hamburger = () => {
  // const [isToggle, setIsToggle] = useState(false);
  const { isNavOpen: isToggle, setIsNavOpen: setIsToggle } =
    useContext(Context);
  return (
    <Wrapper
      onClick={() => setIsToggle((isToggle) => !isToggle)}
      aria-label="menu"
    >
      <Box>
        <InnerWrapper isOpen={isToggle}></InnerWrapper>
      </Box>
    </Wrapper>
  );
};

export default Hamburger;
