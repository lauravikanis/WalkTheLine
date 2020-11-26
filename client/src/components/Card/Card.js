import styled from "styled-components";
import PropTypes from "prop-types";

const Card = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: ${(props) => (props.primary ? "var(--primary-color)" : "white")};
  border-radius: 15px;
  width: 100%;
  max-width: 500px;

  height: 100px;
  margin: 15px auto;

  h2 {
    color: var(--secondary-color);
  }
  img {
    height: 55px;
  }
`;
Card.propTypes = {
  primary: PropTypes.bool,
};

export default Card;
