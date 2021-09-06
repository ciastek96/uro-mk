import React, { css } from "react";
import styled from "styled-components";

const Wrapper = styled.button`
  background-color: ${({ theme }) => theme.color.yellow};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 0;
  min-width: 130px;
  padding: 0.6rem;
  padding: 10px 24px;
  border-radius: 50px;
  border: none;
  font-family: ${({ theme }) => theme.fontFamily.Overpass};
  font-size: 14px;
  color: white;
  fill: white;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.color.yellow80};
  }
`;

const Button = ({ isLoading, children }) => {
  return <Wrapper>{isLoading ? "loading" : children}</Wrapper>;
};

export default Button;
