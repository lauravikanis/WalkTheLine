import Button from "components/Button/Button";
import LocationList from "components/Locations/LocationList";
import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components/macro";

import useFavorites from "../hooks/useFavorites";

const FavoriteDiv: any = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  max-width: 600px;
  width: 90%;

  li {
    list-style: none;
  }
  h3 {
    text-align: center;
  }
  p {
    margin-top: 0;
    text-align: center;
  }
`;

const Favorite: any = () => {
  const { toggleFavorite, favorites }: any = useFavorites("favorites", []);

  const storagefavorites: any = JSON.parse(localStorage.getItem("favorites")!);

  return (
    <FavoriteDiv>
      <h2>Favoriten</h2>
      {favorites.length === 0 ? (
        <>
          <h3>Du hast leider noch keine Favoriten.</h3>
          <p>
            Schau dir die Locations in der App an und füge sie durch Klicken auf
            das Herzsymbol zu deinen Favoriten hinzu.
          </p>
        </>
      ) : (
        <LocationList>
          {storagefavorites.map((name: any) => (
            <li key={name}>
              <Link to={`/location/${name}`}>{name}</Link>
              <Button
                favorite
                onClick={() => toggleFavorite(name)}
                isFavorite={favorites.includes(name)}
              />
            </li>
          ))}
        </LocationList>
      )}
    </FavoriteDiv>
  );
};

export default Favorite;
