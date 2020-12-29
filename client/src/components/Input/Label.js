import styled from "styled-components/macro";
import Radio from "./Radio.js";
const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 15px;
  border: 3px solid var(--primary-color);
  width: 25%;
  max-width: 150px;
  height: 35px;
  margin: 0.75rem auto;
  color: var(--primary-color);
  font-size: 1rem;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  transition: 0.5s;

  ${Radio}:checked + & {
    background-color: var(--primary-color);
    color: white;
    border: 3px solid var(--primary-color);
  }
`;

export default Label;
