import styled from "styled-components";

const size = "48px";

const RoundButton = styled.button`
  width: ${size};
  height: ${size};
  border-radius: ${size};
  border: 0;
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.yellow};

  display: grid;
  place-items: center;

  &:hover {
    filter: brightness(110%);
  }

  & > * {
    width: 40%;
    fill: white;
  }
`;

export default RoundButton;
