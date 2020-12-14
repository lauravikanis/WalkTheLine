import React from "react";
import Splashlogo from "../assets/logo.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Splash = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Splashscreen = () => {
  return (
    <Splash>
      <Link to="/home">
        <img src={Splashlogo} alt="Walk the Line Logo" />
      </Link>
    </Splash>
  );
};
export default Splashscreen;
