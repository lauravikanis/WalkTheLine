import styled from "styled-components/macro";
import PropTypes from "prop-types";

import { ReactComponent as FavOn } from "../../assets/favorite_on.svg";
import { ReactComponent as FavOff } from "../../assets/favorite_off.svg";

const FavouriteIcon = styled.button`
  padding: 0;
  background: none;
  border: none;
  width: 24px;
  height: 24px;
  margin-left: 1rem;
  padding-top: 1px;
`;

const FavouriteButton = ({ onClick, isFavorite }) => {
  console.log(isFavorite);
  return (
    <FavouriteIcon onClick={onClick} favorite={isFavorite}>
      {isFavorite ? <FavOn /> : <FavOff />}
    </FavouriteIcon>
  );
};

export default FavouriteButton;

FavouriteButton.propTypes = {
  isFavorite: PropTypes.bool,
  onClick: PropTypes.func,
};
