import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components/macro";
import FavoriteButton from "../components/Favorite/FavoriteButton";
import Header from "../components/Header/Header";

import PageHeadline from "../components/Header/PageHeadline";
import LocationList from "../components/Standorte/LocationList";
import useFavorites from "../hooks/useFavorites";

const FavoriteDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  max-width: 600px;
  width: 90%;
`;

const Favorite = () => {
  const { toggleFavorite, favorites } = useFavorites("favorites", []);

  const storagefavorites = JSON.parse(localStorage.getItem("favorites"));

  return (
    <FavoriteDiv>
      <Header />
      <PageHeadline>Favoriten</PageHeadline>
      <LocationList>
        {storagefavorites.map((name) => (
          <li key={name}>
            <Link to={`/location/${name}`}>{name}</Link>
            <FavoriteButton
              onClick={() => toggleFavorite(name)}
              isFavorite={favorites.includes(name)}
            />
          </li>
        ))}
      </LocationList>
    </FavoriteDiv>
  );
};

export default Favorite;
