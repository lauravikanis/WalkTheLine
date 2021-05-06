import React from "react";
import { ReactComponent as LogoLight } from "../assets/logo_white.svg";
import { ReactComponent as LogoDark } from "../assets/logo.svg";
import styled, { useTheme } from "styled-components/macro";
import { Link } from "react-router-dom";

const Splash = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Splashscreen: any = () => {
  const themepicker = Object.entries(useTheme())[0][1];

  return (
    <Splash>
      <Link to="/home">
        {themepicker === "light" ? <LogoDark /> : <LogoLight />}
      </Link>
    </Splash>
  );
};
export default Splashscreen;
