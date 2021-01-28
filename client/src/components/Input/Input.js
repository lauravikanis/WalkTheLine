import styled from "styled-components";

const Input = styled.input`
  display: flex;
  background-color: ${(props) => props.theme.bg};
  border: none;
  color: ${(props) => props.theme.linkColor};
  text-align: center;
  margin: 0 auto;
  border-bottom: 3px solid ${(props) => props.theme.headColor};
  width: 100%;
  padding-bottom: 8px;
  margin-bottom: 0.5rem;
`;

export default Input;
