import React, { useState } from "react";
import { useQuery } from "react-query";

import styled from "styled-components/macro";
import { getLocationByName } from "../api/locations";
import { getEveryLocation } from "../api/search";

import PageHeadline from "../components/Header/PageHeadline";
import Input from "../components/Input/Input";

import Standort from "../components/Standorte/Standort";

const SearchDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  max-width: 600px;
  width: 90%;
`;

const Search = () => {
  [search, setSearch] = useState("");
  const { isLoading, error, data: locationByName } = useQuery(
    search,
    getLocationByName
  );
  if (isLoading) {
    return "Laden...";
  }

  if (error) {
    return `Ein Fehler ist aufgetreten: ${error.message}`;
  }

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!search) {
      return null;
    }
    const results = await getEveryLocation(search);
  };

  return (
    <SearchDiv>
      <PageHeadline>Suche</PageHeadline>
      <Searchbar>
        <Input
          type="text"
          placeholder="🔍  Was willst du suchen?"
          value={search}
          onChange={handleChange}
        />
      </Searchbar>
      <Standort>
        {locationByName.name.map((search) => (
          <p key={search}> {search} </p>
        ))}
      </Standort>
    </SearchDiv>
  );
};

export default Search;
