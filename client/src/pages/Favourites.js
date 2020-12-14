import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components/macro";
import FavouriteButton from "../components/Favourite/FavouriteButton";

import PageHeadline from "../components/Header/PageHeadline";
import LocationList from "../components/Standorte/LocationList";
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
      <LocationList>
        {storagefavorites.map((name) => (
          <li key={name}>
            <Link to={`/location/${name}`}>{name}</Link>
            <FavouriteButton
              onClick={() => toggleFavorite(name)}
              isFavorite={favorites.includes(name)}
            />
          </li>
        ))}
      </LocationList>
    </FavouriteDiv>
  );
};

export default Favourite;
