import styled from "styled-components";
import PropTypes from "prop-types";

const Input = styled.input`
  display: flex;
  background-color: var(--background);
  border: none;
  color: var(--text-color);
  text-align: center;
  margin: 0 auto;
  border-bottom: 3px solid #0f4e8f;
  width: 100%;
  padding-bottom: 8px;
`;

export default Input;

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};
