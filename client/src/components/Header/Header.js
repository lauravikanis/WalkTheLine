import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

import Splashlogo from "../../assets/logo.svg";
import BackButton from "../Button/BackButton";

const AppHeader = styled.header`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 20% auto 20%;
  justify-content: space-between;

  img {
    height: 55px;
    padding: 0 2rem;
  }
`;

const Header = () => {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <AppHeader>
      <div> {location === "/home" && <BackButton />}</div>
      <Link to="/">
        <img src={Splashlogo} alt="Walk the Line Logo" />
      </Link>
      <div></div>
    </AppHeader>
  );
};

export default Header;
