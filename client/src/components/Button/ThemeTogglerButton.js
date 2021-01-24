import PropTypes from "prop-types";
import styled from "styled-components/macro";
import { ReactComponent as Toggler } from "../../assets/toggler.svg";

export const IconButton = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  border: none;
  margin: 0;
  padding: 0;
  img {
    width: 30px;
    padding: 0;
  }
`;

const ThemeTogglerButton = ({ onClick }) => {
  return (
    <IconButton onClick={onClick}>
      <Toggler />
    </IconButton>
  );
};
export default ThemeTogglerButton;

ThemeTogglerButton.propTypes = {
  onClick: PropTypes.func,
};
