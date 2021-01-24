import PropTypes from "prop-types";
import styled, { useTheme } from "styled-components/macro";
import { ReactComponent as Toggler } from "../../assets/toggler.svg";

export const IconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    fill: ${(props) => props.theme.icon};
  }
`;

export const ThemeTogglerButton = ({ onClick, toggleTheme }) => {
  const theme = useTheme().theme;

  return (
    <IconButton onClick={onClick}>
      <Toggler />
    </IconButton>
  );
};

ThemeTogglerButton.propTypes = {
  onClick: PropTypes.func,
  toggleTheme: PropTypes.func,
};
