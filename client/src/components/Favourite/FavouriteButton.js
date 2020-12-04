import styled from "styled-components/macro";
import PropTypes from "prop-types";

const FavouriteButton = styled.button`
  padding: 0;
  background: none;
  border: none;
  width: 24px;
  height: 24px;
  margin-left: 1rem;
  padding-top: 1px;
`;

FavouriteButton.propTypes = {
  active: PropTypes.bool,
};
export default FavouriteButton;
