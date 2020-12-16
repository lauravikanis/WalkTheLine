import styled from "styled-components/macro";
import PropTypes from "prop-types";

const SearchButton = styled.input`
  display: flex;
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
const Button = ({ value, onChange, label }) => {
  return (
    <SearchButton type="radio" value={value} onChange={onChange}>
      <label>{label}</label>
    </SearchButton>
  );
};

Button.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
};
export default Button;
