import styled from "styled-components";
import InputStyles from "../Input/InputStyles";

const Textarea = styled.textarea`
  ${InputStyles};
  min-width: 100%;
  max-width: 100%;
  min-height: 250px;
  max-height: 500px;
  height: 45px;
  padding: 1rem;
  margin: 0.5rem auto;
`;

export default Textarea;
