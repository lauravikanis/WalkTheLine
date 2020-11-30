import styled from "styled-components/macro";
import PropTypes from "prop-types";

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => (props.active ? "var(--primary-color)" : "white")};
  border-radius: 15px;
  width: 25%;
  height: 50px;
  margin: 15px auto;
  color: var(--secondary-color);
  font-size: 1rem;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
`;

Button.propTypes = {
  active: PropTypes.bool,
};
export default Button;
