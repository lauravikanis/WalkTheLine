import styled from "styled-components/macro";
import PropTypes from "prop-types";

const Standort = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 15px;
`;
Standort.propTypes = {
  primary: PropTypes.bool,
};

export default Standort;
