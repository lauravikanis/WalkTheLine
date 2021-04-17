import React from "react";
import styled, { useTheme } from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as LogoLight } from "../../assets/logo_white.svg";
import { ReactComponent as LogoDark } from "../../assets/logo.svg";
import BackButton from "../Button/BackButton";
import ThemeTogglerButton from "../Button/ThemeTogglerButton";
import PropTypes from "prop-types";

const AppHeader = styled.header`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 20% auto 20%;
  justify-content: space-between;
  width: 90%;
  max-width: 600px;

  svg {
    max-height: 55px;
    padding: 0 1rem;
  }
`;

const Header = ({ toggleTheme }) => {
  const location = useLocation();
  const theme = useTheme();

  return (
    <>
      <AppHeader>
        <div> {location.pathname !== "/" && <BackButton />}</div>
        <Link to="/">{theme === "light" ? <LogoDark /> : <LogoLight />} </Link>
        <ThemeTogglerButton onClick={toggleTheme} />
      </AppHeader>
    </>
  );
};
Header.propTypes = {
  toggleTheme: PropTypes.func,
};

export default Header;