import React from "react";
import styled from "styled-components/macro";
import { getLocationByName } from "../api/locations";

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

// const ButtonDiv = styled.div`
//   display: flex;
//   flex-direction: row;
// `;
console.log();

const Search = (searchData) => {
  return (
    <SearchDiv>
      <PageHeadline>Suche</PageHeadline>
      <Searchbar onSubmit={getLocationByName(searchData)}>
        <Input
          value={searchData}
          type="text"
          placeholder="🔍  Was willst du suchen?"
        />
      </Searchbar>
      <Standort>
        <li>Blabla</li>
      </Standort>
    </SearchDiv>
  );
};

export default Search;
