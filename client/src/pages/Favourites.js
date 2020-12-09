import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import FavouriteIcon from "../components/Favourite/FavouriteButton";

import PageHeadline from "../components/Header/PageHeadline";
import Standort from "../components/Standorte/Standort";
import useFavorites from "../hooks/useFavorites";

const FavouriteDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  max-width: 600px;
`;

const Favourite = () => {
  const { toggleFavorite, favorites } = useFavorites("favorites", []);

  const storagefavorites = JSON.parse(localStorage.getItem("favorites"));
  console.log(favorites);

  return (
    <FavouriteDiv>
      <PageHeadline>Favoriten</PageHeadline>
      <Standort>
        {storagefavorites.map((name) => (
          <li key={name}>
            <Link to={`/Location/${name}`}>{name}</Link>
            <FavouriteIcon
              onClick={() => toggleFavorite(name)}
              isFavorite={favorites.includes(name)}
            />
          </li>
        ))}
      </Standort>
    </FavouriteDiv>
  );
};

export default Favourite;
