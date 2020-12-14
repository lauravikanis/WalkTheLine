import React, { useState } from "react";
import { useQuery } from "react-query";

import styled from "styled-components/macro";
import { getEveryLocation } from "../../../lib/search";

import PageHeadline from "../components/Header/PageHeadline";
import Input from "../components/Input/Input";

import Searchbar from "../components/SearchBar/Searchbar";
import Standort from "../components/Standorte/Standort";

const SearchDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  max-width: 600px;
  width: 90%;
`;

// const ButtonDiv = styled.div`
//   display: flex;
//   flex-direction: row;
// `;

const Search = () => {
  [searchInput, setsearchInput] = useState("");
  const { isLoading, error, data: everyLocation } = useQuery(
    value,
    getEveryLocation
  );
  if (isLoading) {
    return "Laden...";
  }

  if (error) {
    return `Ein Fehler ist aufgetreten: ${error.message}`;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    event.preventDefault();
    setsearchInput(event.target.value);
  };

  return (
    <SearchDiv>
      <PageHeadline>Suche</PageHeadline>
      <Searchbar>
        <Input
          value={searchInput}
          type="text"
          placeholder="🔍  Was willst du suchen?"
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </Searchbar>
      <Standort>
        {everyLocation.map((search) => (
          <li key={search}>{search}</li>
        ))}
      </Standort>
    </SearchDiv>
  );
};

export default Search;
