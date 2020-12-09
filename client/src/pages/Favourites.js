import React from "react";
import styled from "styled-components/macro";
import FavouriteButton from "../components/Favourite/FavouriteButton";

import PageHeadline from "../components/Header/PageHeadline";
import Standort from "../components/Standorte/Standort";

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
          Favorite
          <FavouriteButton />
        </li>
        <li>
          Favorite
          <FavouriteButton />
        </li>
        <li>
          Favorite
          <FavouriteButton />
        </li>
        <li>
          Favorite
          <FavouriteButton />
        </li>
        <li>
          Favorite
          <FavouriteButton />
        </li>
      </Standort>
    </FavouriteDiv>
  );
};

export default Favourite;
