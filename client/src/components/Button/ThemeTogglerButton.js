import PropTypes from "prop-types";
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
    height: 100%;
    padding: 0;
    margin: 0;
  }
`;

const ThemeTogglerButton = ({ onClick }) => {
  const theme = useTheme().theme;

  return (
    <IconButton onClick={onClick}>
      {theme === "light" ? <Toggler /> : <TogglerDark />}
    </IconButton>
  );
};
export default ThemeTogglerButton;

ThemeTogglerButton.propTypes = {
  onClick: PropTypes.func,
};
