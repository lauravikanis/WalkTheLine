import React from "react";
import styled from "styled-components/macro";

import PageHeadline from "../components/Header/PageHeadline";
import Standort from "../components/Standorte/Standort";

const FavouriteDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
`;

const Favourites = () => {
  return (
    <FavouriteDiv>
      <PageHeadline>Suche</PageHeadline>
      <Standort>
        <li>Suchergebniss</li>
        <li>Suchergebniss</li> <li>Suchergebniss</li> <li>Suchergebniss</li>{" "}
        <li>Suchergebniss</li>
      </Standort>
    </FavouriteDiv>
  );
};

export default Favourites;
