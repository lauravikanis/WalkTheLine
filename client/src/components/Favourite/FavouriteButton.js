import styled from "styled-components/macro";
import PropTypes from "prop-types";
import { useState } from "react";
import { ReactComponent as FavIconActive } from "../../assets/favorite_on.svg";
import { ReactComponent as FavIconInactive } from "../../assets/favorite_on.svg";

const Favorite = styled.button`
  padding: 0;
  background: none;
  border: none;
  width: 24px;
  height: 24px;
  margin-left: 1rem;
  padding-top: 1px;
`;

const FavoriteButton = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const handleClick = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <Favorite onClick={handleClick}>
      {isFavorite ? <FavIconActive /> : <FavIconInactive />}
    </Favorite>
  );
};

export default FavoriteButton;

FavoriteButton.propTypes = {
  onClick: PropTypes.func,
  isFavorite: PropTypes.bool,
};
