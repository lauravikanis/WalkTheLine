import React from "react";
import styled from "styled-components/macro";
import Button from "../components/Button/Button";
import Header from "../components/Header/Header";
import PageHeadline from "../components/Header/PageHeadline";
import Input from "../components/Input/Input";
import LocationList from "../components/Standorte/LocationList";

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
      <Header />

      <PageHeadline>Suche</PageHeadline>
      <Input placeholder="🕵️‍♀️ Was willst du suchen?" />
      <ButtonDiv>
        <Button active>Shop</Button>
        <Button active>Venue</Button>
        <Button active>Poi</Button>
      </ButtonDiv>
      <LocationList>
        <li>Suchergebnis</li>
        <li>Suchergebnis</li> <li>Suchergebnis</li> <li>Suchergebnis</li>{" "}
        <li>Suchergebnis</li>
      </LocationList>
    </SearchDiv>
  );
};

export default Search;
