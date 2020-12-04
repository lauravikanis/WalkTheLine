import styled from "styled-components/macro";
import PropTypes from "prop-types";

const Standort = styled.ol`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;
  margin: 15px;

  a {
    color: var(--secondary-color);
  }
`;
Standort.propTypes = {
  primary: PropTypes.bool,
};

export default Standort;
