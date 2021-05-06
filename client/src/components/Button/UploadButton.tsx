import styled from "styled-components/macro";

const UploadButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-color);
  border-radius: 15px;
  border: none;
  height: 50px;
  margin: 15px auto;
  color: white;
  font-size: 1rem;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  padding-left: 1rem;
  padding-right: 1rem;

  :active {
    background-color: white;
    color: var(--primary-color);
  }
`;

export default UploadButton;
