import styled from "styled-components/macro";
import PropTypes from "prop-types";

const ButtonLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-color);
  border-radius: 15px;
  border: none;
  width: 25%;
  max-width: 150px;
  height: 50px;
  margin: 15px auto;
  color: white;
  font-size: 1rem;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;

  :active {
    background-color: white;
    color: var(--primary-color);
  }
`;

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const RadioButton = (type_name) => {
  return (
    <ButtonLabel>
      <Input type="radio" name={type_name} />
      <span>Type</span>
    </ButtonLabel>
  );
};

RadioButton.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
};
export default RadioButton;
