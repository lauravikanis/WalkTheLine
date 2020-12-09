import styled from "styled-components/macro";
import PropTypes from "prop-types";

import { ReactComponent as FavOn } from "../../assets/favorite_on.svg";
import { ReactComponent as FavOff } from "../../assets/favorite_off.svg";

const FavouriteButton = styled.button`
  padding: 0;
  background: none;
  border: none;
  width: 24px;
  height: 24px;
  margin-left: 1rem;
  padding-top: 1px;
`;

const FavouriteIcon = ({ onClick, isFavorite }) => {
  console.log(isFavorite);
  return (
    <FavouriteButton onClick={onClick} favorite={isFavorite}>
      {isFavorite ? <FavOn /> : <FavOff />}
      {/* <img src={favouritepath} alt="favourite" /> */}
    </FavouriteButton>
  );
};

export default FavouriteIcon;

FavouriteIcon.propTypes = {
  isFavorite: PropTypes.bool,
  onClick: PropTypes.func,
};
