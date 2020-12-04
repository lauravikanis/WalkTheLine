import styled from "styled-components/macro";
import PropTypes from "prop-types";

const DetailCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 15px;
  width: 100%;
  margin: 15px auto;
  padding: 0 2.5rem;
  visibility: ${(props) => (props.hidden ? "hidden" : "visible")};

  p {
    color: var(--secondary-color);
    text-align: center;
    display: inline-block;
    align-self: center;
    font-size: 16p;
  }
`;
DetailCard.propTypes = {
  visibility: PropTypes.bool,
};

export default DetailCard;
