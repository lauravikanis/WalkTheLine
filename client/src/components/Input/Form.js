import styled from "styled-components";

const Form = styled.form`
  display: flex;
  text-align: center;
  border-bottom: 3px solid #0f4e8f;
  width: 100%;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;

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
  }
  input[type="checkbox"] label:after {
    background-color: white;
    color: var(--primary-color);
  }

  label:active {
    background-color: white;
    color: var(--primary-color);
  }

  label:focus {
    background-color: red;
    color: var(--primary-color);
  }
`;

export default Form;
