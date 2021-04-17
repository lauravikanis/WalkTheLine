import React from "react";
import styled, { useTheme } from "styled-components/macro";
import { ReactComponent as Toggler } from "../../assets/sun.svg";
import { ReactComponent as TogglerDark } from "../../assets/night-mode.svg";

export const IconButton = styled.button`
  border: none;
  margin: 0;
  padding: 0;
  color: grey;
  background: none;
  transition: 0.5s;

  svg {
    width: 100%;
    max-width: 70px;

    height: 100%;
    padding: 0;
    margin: 0;
    margin-right: 1rem;
  }
`;

const ThemeTogglerButton: any = ({ onClick }: any) => {
  const theme = useTheme();

  return (
    <IconButton onClick={onClick}>
      {theme === "light" ? <Toggler /> : <TogglerDark />}
    </IconButton>
  );
};
export default ThemeTogglerButton;
