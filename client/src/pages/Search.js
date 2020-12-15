import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
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
  const [results, setResults] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");

  useEffect(() => {
    async function fetchData() {
      const newResults = await getEveryLocation();
      setResults(newResults);
      console.log(newResults);
    }
    fetchData();
  }, []);
  console.log(results);
  return (
    <SearchDiv>
      <Header />
      <PageHeadline>Suche</PageHeadline>
      <Searchbar>
        <Input
          type="text"
          placeholder="🔍  Was willst du suchen?"
          value={searchFilter}
          onChange={(event) => setSearchFilter(event.target.value)}
        />
      </Searchbar>
      <LocationList>
        {results
          .filter((results) => results.name.includes(searchFilter))
          .map((filterResult) => (
            <li key={filterResult.name}> {filterResult.name} </li>
          ))}
      </LocationList>
    </SearchDiv>
  );
};

export default Search;
