import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "styled-components";
import { ReactComponent as LogoDark } from "../../assets/logo.svg";
import { ReactComponent as LogoLight } from "../../assets/logo_white.svg";
import Button from "../Button/Button";
import classes from "./Header.module.scss";

interface HeaderProps {
  toggleTheme: () => void;
}

const Header = ({ toggleTheme }: HeaderProps) => {
  const location = useLocation();
  const themepicker = Object.entries(useTheme())[0][1];

  return (
    <div className={classes.header}>
      <div>{location.pathname !== "/" && <Button backbutton />}</div>
      <Link to="/">
        {themepicker === "light" ? <LogoDark /> : <LogoLight />}
      </Link>
      <Button onClick={toggleTheme} theme />
    </div>
  );
};

export default Header;
