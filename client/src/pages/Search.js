import React, { useState } from "react";
import { useQuery } from "react-query";

import styled from "styled-components/macro";
import { getLocationByName } from "../api/locations";
import { getEveryLocation } from "../api/search";
import Header from "../components/Header/Header";

import PageHeadline from "../components/Header/PageHeadline";
import Input from "../components/Input/Input";
import Searchbar from "../components/SearchBar/Searchbar";
import LocationList from "../components/Standorte/LocationList";

const SearchDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  max-width: 600px;
  width: 90%;
`;

const Search = () => {
  const [search, setSearch] = useState("");

  const { isLoading, error, data: locationByName } = useQuery(
    "search",
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
      <Header />
      <PageHeadline>Suche</PageHeadline>
      <Searchbar>
        <Input
          type="text"
          placeholder="🔍  Was willst du suchen?"
          value={search}
          onChange={handleChange}
        />
      </Searchbar>
      <LocationList>
        {/* {locationByName.name.map((search) => (
          <p key={search}> {search} </p>
        ))} */}
      </LocationList>
    </SearchDiv>
  );
};

export default Search;
