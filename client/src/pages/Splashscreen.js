import React from "react";
import Splashlogo from "../assets/logo.svg";
import styled from "styled-components";

const Splash = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  height: 90vh;
`;

const Splashscreen = () => {
  return (
    <Splash>
      <img src={Splashlogo} alt="Walk the Line Logo" />
    </Splash>
  );
};
export default Splashscreen;
