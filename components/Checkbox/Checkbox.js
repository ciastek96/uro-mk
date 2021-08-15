import React from "react";
import styled from "styled-components";

const Label = styled.label`
  font-family: ${({ theme }) => theme.fontFamily.Overpass};
  font-size: 14px;
  color: ${({ theme }) => theme.color.dark80};
  cursor: pointer;
  display: grid;
  grid-template-columns: auto 3fr;
`;

const Icon = styled.svg`
  width: 16px;
  stroke: ${({ theme }) => theme.color.darkGrey};
  stroke-width: 8;
  fill: white;
  margin: 0.2rem 0.5rem 0 0;
`;

const Box = styled.rect`
  stroke-dasharray: 320;
  stroke-dashoffset: 0;
  fill: white;
  transition: all 0.15s linear;
`;

const Check = styled.polyline`
  stroke-dasharray: 70;
  stroke-dashoffset: 70;
  fill: none;
  transition: all 0.15s linear;
`;

const Input = styled.input`
  display: none;
  pointer-events: none;

  &:focus-within + ${Label} {
    outline: 2px solid red;

    ${Icon} {
      stroke: ${({ theme }) => theme.color.yellow};
    }

    ${Box} {
      fill: white;
    }
  }

  &:hover + ${Label} {
    ${Icon} {
      stroke: ${({ theme }) => theme.color.yellow};
    }

    ${Box} {
      fill: white;
    }
  }

  &:checked + ${Label} {
    ${Icon} {
      stroke: ${({ theme }) => theme.color.yellow};
    }

    ${Box} {
      stroke-dashoffset: 0;
      fill: white;
    }

    ${Check} {
      stroke-dashoffset: 0;
    }
  }
`;

const Checkbox = ({ name, label, withErrors, registerProps }) => (
  <>
    <Input
      type="checkbox"
      name={name}
      id={name}
      withErrors={withErrors}
      {...registerProps}
    />
    <Label htmlFor={name}>
      <Icon viewBox="0 0 100 100" aria-hidden="true" focusable="false">
        <Box
          className="box"
          x="5"
          y="5"
          width="90"
          height="90"
          rx="50"
          // d="M82,89H18c-3.87,0-7-3.13-7-7V18c0-3.87,3.13-7,7-7h64c3.87,0,7,3.13,7,7v64C89,85.87,85.87,89,82,89z"
        />
        <Check className="check" points="25.5,53.5 39.5,67.5 72.5,34.5 " />
      </Icon>
      <span>{label}</span>
    </Label>
  </>
);
export default Checkbox;
