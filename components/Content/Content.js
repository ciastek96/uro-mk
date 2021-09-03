import styled from "styled-components";

const Content = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.Overpass};
  color: ${({ theme }) => theme.color.dark80};
  font-size: clamp(16px, 2vw, 18px);
  line-height: 1.4;

  ul {
    padding: 0;

    li {
      margin: 0.5rem 1.5rem;
    }
  }
`;

export default Content;
