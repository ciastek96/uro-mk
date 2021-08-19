import styled from "styled-components";

const Heading = styled.h2`
  font-family: ${({ theme }) => theme.fontFamily.Montserrat};
  font-size: 36px;
  font-size: clamp(22px, 3vw, 36px);
  font-weight: 700;
  color: ${({ theme }) => theme.color.dark};
  position: relative;
  //padding-left: 1ch;
  // margin: 1rem 0 2rem;
  word-wrap: break-word;
  // overflow: hidden;
  text-transform: lowercase;
  display: inline-flex;
  align-items: flex-start;
  z-index: 1;

  &::before {
    /* content: "/";
    position: absolute;
    top: 0;
    left: 0;
    color: ${({ theme }) => theme.color.yellow}; */
    width: 2.5ch;
    height: 0.25ch;
    content: "";
    position: absolute;
    //top: -5px;
    bottom: -0px;
    left: -5px;
    background-color: ${({ theme }) => theme.color.yellow};
    z-index: -1;
  }
`;

export default Heading;
