import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { ButtonTypes } from "../../models/models";

const StyledButton = styled.button`
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

interface IButtonProps {
  isLoading?: boolean;
  children: ReactNode;
  type: ButtonTypes | undefined;
  name: string;
}

const Button: React.FC<IButtonProps> = ({
  isLoading = false,
  children,
  type = ButtonTypes.Button,
  name,
}: IButtonProps) => (
  <StyledButton name={name} type={type}>
    {isLoading ? "loading" : children}
  </StyledButton>
);

export default Button;
