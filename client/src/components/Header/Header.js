import React from "react";
import styled from "styled-components";
import Splashlogo from "../../assets/logo.svg";
import Backarrow from "../../assets/back.svg";

const AppHeader = styled.header`
  display: flex;
  justify-content: space-between;

  img {
    height: 55px;
    padding: 0 2rem;
  }
`;

const Header = () => (
  <AppHeader>
    <img src={Backarrow} alt="Go back" />
    <img src={Splashlogo} alt="Walk the Line Logo" />
  </AppHeader>
);

export default Header;
