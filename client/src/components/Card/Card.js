import styled from "styled-components/macro";
import PropTypes from "prop-types";

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => (props.primary ? "var(--primary-color)" : "white")};
  border-radius: 15px;
  width: 100%;
  max-width: 500px;
  height: 100px;
  margin: 15px auto;
  padding: 0 2.5rem;

  h2 {
    color: var(--secondary-color);
    text-align: left;
  }
  img {
    height: 55px;
  }
`;
Card.propTypes = {
  primary: PropTypes.bool,
};

export default Card;
