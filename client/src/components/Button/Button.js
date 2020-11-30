import styled from "styled-components/macro";
import PropTypes from "prop-types";

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => (props.active ? "var(--primary-color)" : "white")};
  border-radius: 15px;
  width: 90px;
  height: 50px;
  margin: 15px auto;

  h2 {
    color: var(--secondary-color);
    font-size: 20px;
    text-align: center;
  }
`;

Button.propTypes = {
  active: PropTypes.bool,
};
export default Button;
