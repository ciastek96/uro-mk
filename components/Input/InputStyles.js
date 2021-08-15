import { css } from "styled-components";

const InputStyles = () => css`
  border: 1px solid ${({ theme }) => theme.color.darkGrey};
  border-radius: 5px;
  color: ${({ theme }) => theme.color.dark80};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fontFamily.Overpass};
  outline-color: ${({ theme }) => theme.color.yellow};
  caret-color: ${({ theme }) => theme.color.yellow};

  &::placeholder {
    color: ${({ theme }) => theme.color.lightGrey};
    font-size: 14px;
    font-family: ${({ theme }) => theme.fontFamily.Overpass};
  }

  ${({ isValid }) =>
    isValid &&
    css`
      outline-color: green;
      caret-color: green;
    `}

  ${({ withErrors }) =>
    withErrors &&
    css`
      outline-color: red;
      caret-color: red;
    `};
`;

export default InputStyles;
