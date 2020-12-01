import styled from "styled-components/macro";
import PropTypes from "prop-types";

const Favourite = styled.button`
  padding: 0;
  background: none;
  border: none;
  width: 24px;
  height: 24px;
  margin-left: 1rem;
  padding-top: 1px;
`;

Favourite.propTypes = {
  active: PropTypes.bool,
};
export default Favourite;
