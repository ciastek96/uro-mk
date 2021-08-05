import styled from "styled-components";

const Heading = styled.h2`
  font-family: ${({ theme }) => theme.fontFamily.Montserrat};
  font-size: 36px;
  font-size: clamp(22px, 3vw, 36px);
  font-weight: 700;
  color: ${({ theme }) => theme.color.dark};
  position: relative;
  padding-left: 1ch;
  margin: 1rem 0 2rem;
  word-wrap: wrap;
  overflow: hidden;

  &::before {
    content: "/";
    position: absolute;
    top: 0;
    left: 0;
    color: ${({ theme }) => theme.color.yellow};
  }
`;

export default Heading;
