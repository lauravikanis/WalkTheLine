import React from "react";
import styled from "styled-components/macro";
import Button from "../components/Button/Button";
import PageHeadline from "../components/Header/PageHeadline";
import Input from "../components/Input/Input";
import Searchbar from "../components/SearchBar/Searchbar";
import Standort from "../components/Standorte/Standort";

const SearchDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  max-width: 600px;
`;

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const Search = () => {
  return (
    <SearchDiv>
      <PageHeadline>Suche</PageHeadline>
      <Searchbar />
      <ButtonDiv>
        <Button active>Shop</Button>
        <Button active>Venue</Button>
        <Button active>Poi</Button>
      </ButtonDiv>
      <Standort>
        <li>Suchergebnis</li>
        <li>Suchergebnis</li> <li>Suchergebnis</li> <li>Suchergebnis</li>{" "}
        <li>Suchergebnis</li>
      </Standort>
    </SearchDiv>
  );
};

export default Search;
