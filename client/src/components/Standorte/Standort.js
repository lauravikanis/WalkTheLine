import styled from "styled-components/macro";
import PropTypes from "prop-types";

const Standort = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 500px;
  list-style-type: none;
  padding: 0;
`;
Standort.propTypes = {
  primary: PropTypes.bool,
};

export default Standort;
