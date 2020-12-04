import React from "react";
import styled from "styled-components/macro";
import FavouriteButton from "../components/Favourite/FavouriteButton";

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

const Favourite = () => {
  return (
    <FavouriteDiv>
      <PageHeadline>Suche</PageHeadline>
      <Standort>
        <li details>
          Suchergebniss
          <FavouriteButton>
            <img src={FavoriteOffpath} alt="favorite_off" />,
          </FavouriteButton>
        </li>
        <li>
          Suchergebniss
          <FavouriteButton>
            <img src={FavoriteOnpath} alt="favorite_on" />
          </FavouriteButton>
        </li>{" "}
        <li>
          Suchergebniss
          <FavouriteButton>
            <img src={FavoriteOnpath} alt="favorite_on" />
          </FavouriteButton>{" "}
        </li>{" "}
        <li>
          Suchergebniss
          <FavouriteButton>
            <img src={FavoriteOnpath} alt="favorite_on" />
          </FavouriteButton>{" "}
        </li>
        <li>
          Suchergebniss
          <FavouriteButton>
            <img src={FavoriteOnpath} alt="favorite_on" />
          </FavouriteButton>{" "}
        </li>
      </Standort>
    </FavouriteDiv>
  );
};

export default Favourite;
