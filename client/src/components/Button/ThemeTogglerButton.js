import PropTypes from "prop-types";
import styled, { useTheme } from "styled-components/macro";
import { ReactComponent as Toggler } from "../../assets/toggler.svg";
import { ReactComponent as TogglerDark } from "../../assets/togglerDark.svg";

export const IconButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  margin: 0;
  padding: 0;
  color: grey;

  svg {
    width: 30px;
    padding: 0;
    margin: 10px;
  }
`;

const ThemeTogglerButton = ({ onClick }) => {
  const theme = useTheme().theme;

  return (
    <IconButton onClick={onClick}>
      {theme === "light" ? (
        <>
          <p>Darkmode?</p>
          <Toggler />
        </>
      ) : (
        <>
          <p>Lightmode?</p>
          <TogglerDark />
        </>
      )}
    </IconButton>
  );
};
export default ThemeTogglerButton;

ThemeTogglerButton.propTypes = {
  onClick: PropTypes.func,
};
