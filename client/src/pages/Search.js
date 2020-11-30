import React from "react";
import styled from "styled-components/macro";
import Button from "../components/Button/Button";
import PageHeadline from "../components/Header/PageHeadline";
import Input from "../components/Input/Input";
import Standort from "../components/Standorte/Standort";

const SearchDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
`;

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const Search = () => {
  return (
    <SearchDiv>
      <PageHeadline>Suche</PageHeadline>
      <Input placeholder="🕵️‍♀️ Was willst du suchen?" />
      <ButtonDiv>
        <Button active>Shop</Button>
        <Button active>Venue</Button>
        <Button active>Poi</Button>
      </ButtonDiv>
      <Standort>
        <li>Suchergebniss</li>
        <li>Suchergebniss</li> <li>Suchergebniss</li> <li>Suchergebniss</li>{" "}
        <li>Suchergebniss</li>
      </Standort>
    </SearchDiv>
  );
};

export default Search;
