import styled from "styled-components/macro";
import PropTypes from "prop-types";
import React from "react";

import { ReactComponent as FavOn } from "../../assets/favorite_on.svg";
import { ReactComponent as FavOff } from "../../assets/favorite_off.svg";

const FavoriteIcon: any = styled.button`
  padding: 0;
  background: none;
  border: none;
  width: 24px;
  height: 24px;
  margin-left: 1rem;
  padding-top: 1px;
`;

const FavoriteButton: any = ({ onClick, isFavorite }) => {
  return (
    <FavoriteIcon onClick={onClick} favorite={isFavorite}>
      {isFavorite ? <FavOn /> : <FavOff />}
    </FavoriteIcon>
  );
};

export default FavoriteButton;

FavoriteButton.propTypes = {
  isFavorite: PropTypes.bool,
  onClick: PropTypes.func,
};