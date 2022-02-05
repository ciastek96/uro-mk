import styled from "styled-components";
import InputStyles from "./InputStyles";

interface IInputProps {
    type: string;
    name: string;
    id: string;
    withErrors?:boolean
}

const Input= styled.input<IInputProps>`
  ${InputStyles};
  width: 100%;
  height: 45px;
  margin: 0.5rem auto;
  padding: 0 1rem;
`;

export default Input;
