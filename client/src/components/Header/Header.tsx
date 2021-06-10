import React from "react";
import styled, { useTheme } from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as LogoLight } from "../../assets/logo_white.svg";
import { ReactComponent as LogoDark } from "../../assets/logo.svg";
import PropTypes from "prop-types";
import Button from "../Button/Button";

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
  const themepicker = Object.entries(useTheme())[0][1];

  return (
    <>
      <AppHeader>
        <div>{location.pathname !== "/" && <Button backbutton />}</div>
        <Link to="/">
          {themepicker === "light" ? <LogoDark /> : <LogoLight />}
        </Link>
        <Button onClick={toggleTheme} theme />
      </AppHeader>
    </>
  );
};
Header.propTypes = {
  toggleTheme: PropTypes.func,
};

export default Header;
