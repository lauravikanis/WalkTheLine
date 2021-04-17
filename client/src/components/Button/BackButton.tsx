import React from "react";
import styled from "styled-components/macro";
import Backarrow from "../../assets/back.svg";
import { useHistory } from "react-router-dom";

const Back: any = styled.button`
  padding: 0 2rem;
  border: none;
  background: none;

  img {
    height: 55px;
    padding-bottom: 0;
  }
`;

const BackButton: any = () => {
  const history = useHistory();

  return (
    <Back onClick={() => history.goBack()}>
      <img src={Backarrow} alt="Go back" />
    </Back>
  );
};
export default BackButton;
