import styled from "styled-components/macro";
import Radio from "./Radio";

const Label: any = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 15px;
  border: 3px solid var(--primary-color);
  width: 25%;
  max-width: 125px;
  min-width: 105px;
  height: 35px;
  margin: 0.2rem;
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
