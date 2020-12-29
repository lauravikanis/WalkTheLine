import styled from "styled-components";
import PropTypes from "prop-types";

const Form = styled.form`
  display: flex;
  text-align: center;
  width: 100%;

  input[type="radio"] {
    opacity: 0;
    position: fixed;
    width: 0;
  }
  label {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${(props) =>
      props.checked ? "white" : "var(--primary-color);"};
    border-radius: 15px;
    border: none;
    width: 25%;
    max-width: 150px;
    height: 50px;
    margin: 0.75rem auto;
    color: ${(props) => (props.checked ? "var(--primary-color);" : "white")};
    font-size: 1rem;
    text-align: center;
    font-weight: bold;
    text-transform: uppercase;
  }
  input:checked + label {
    background-color: #bfb;
    border-color: #4c4;
  }

  input:checked + label:after {
    background-color: #bfb;
    border-color: #4c4;
  }

  label:active {
    background-color: white;
    color: var(--primary-color);
  }
`;
Form.propTypes = {
  details: PropTypes.bool,
};

export default Form;
