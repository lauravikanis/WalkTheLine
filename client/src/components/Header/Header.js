import React from "react";
import styled, { useTheme } from "styled-components";
import { Link, useLocation } from "react-router-dom";

import { ReactComponent as LogoLight } from "../../assets/logo_white.svg";
import { ReactComponent as LogoDark } from "../../assets/logo.svg";
import BackButton from "../Button/BackButton";

const AppHeader = styled.header`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 20% auto 20%;
  justify-content: space-between;

  svg {
    height: 55px;
    padding: 0 2rem;
  }
`;

const Header = () => {
  const location = useLocation();
  const theme = useTheme().theme;

  return (
    <>
      <AppHeader>
        <div> {location.pathname !== "/" && <BackButton />}</div>
        <Link to="/">{theme === "light" ? <LogoDark /> : <LogoLight />} </Link>
        <div></div>
      </AppHeader>
    </>
  );
};

export default Header;
