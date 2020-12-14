import styled from "styled-components";
import PropTypes from "prop-types";

const Searchbar = styled.form`
  display: flex;
  justify-content: center;
`;

export default Searchbar;

Searchbar.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
