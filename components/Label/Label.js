import styled from "styled-components";

const Label = styled.p`
  color: ${({ theme }) => theme.color.yellow};
  font-family: ${({ theme }) => theme.fontFamily.Lato};
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 1.75px;
  margin: 10px 0;
`;

export default Label;
