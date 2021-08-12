import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  background: ${({ theme }) => theme.color.yellow};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 0;
  min-width: 130px;
  padding: 0.6rem;
  border-radius: 50px;
  border: none;
  font-family: ${({ theme }) => theme.fontFamily.Overpass};
  font-size: 14px;
  color: white;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.color.yellow80};
  }
`;

const Button = ({ isLoading, children }) => {
  return <Btn>{isLoading ? "loading" : children}</Btn>;
};

export default Button;
