import React from "react";
import styled from "styled-components/macro";
import Favourite from "../components/Favourite/Favourite";

import PageHeadline from "../components/Header/PageHeadline";
import Standort from "../components/Standorte/Standort";
import FavoriteOnpath from "../assets/favorite_on.svg";
import FavoriteOffpath from "../assets/favorite_off.svg";

const FavouriteDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  max-width: 600px;
`;

const Favourites = () => {
  return (
    <FavouriteDiv>
      <PageHeadline>Suche</PageHeadline>
      <Standort>
        <li details>
          Suchergebniss
          <Favourite>
            <img src={FavoriteOffpath} alt="favorite_off" />,
          </Favourite>
        </li>
        <li>
          Suchergebniss
          <Favourite>
            <img src={FavoriteOnpath} alt="favorite_on" />
          </Favourite>
        </li>{" "}
        <li>
          Suchergebniss
          <Favourite />
        </li>{" "}
        <li>
          Suchergebniss
          <Favourite />
        </li>
        <li>
          Suchergebniss
          <Favourite />
        </li>
      </Standort>
    </FavouriteDiv>
  );
};

export default Favourites;
