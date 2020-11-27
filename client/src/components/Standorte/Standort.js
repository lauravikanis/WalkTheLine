import styled from "styled-components/macro";
import PropTypes from "prop-types";

const Standort = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-radius: 15px;
  width: 100%;
  max-width: 500px;
  height: 45px;
  margin: 15px auto;
  padding: 0 2.5rem;
  color: var(--secondary-color);
`;
Standort.propTypes = {
  primary: PropTypes.bool,
};

export default Standort;
