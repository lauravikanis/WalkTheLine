import styled from "styled-components/macro";
import PropTypes from "prop-types";

const DetailCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.detailCard};
  border-radius: 15px;
  width: 100%;
  min-height: 50px;
  margin: 15px auto;
  padding: 0.5rem 2.5rem;
  visibility: ${(props) => (props.hidden ? "hidden" : "visible")};

  p {
    color: var(--secondary-color);
    text-align: center;
    align-self: center;
    font-size: 16p;
    margin: 3px auto;
  }
`;
DetailCard.propTypes = {
  visibility: PropTypes.bool,
};
DetailCard.propTypes = {
  label: PropTypes.string,
};

export default DetailCard;
