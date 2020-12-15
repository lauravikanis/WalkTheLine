import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { getEveryLocation } from "../api/search";

import Header from "../components/Header/Header";

import PageHeadline from "../components/Header/PageHeadline";
import Input from "../components/Input/Input";
import Searchbar from "../components/SearchBar/Searchbar";
import LocationList from "../components/Standorte/LocationList";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const SearchDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  max-width: 600px;
  width: 90%;

  li {
    list-style: none;
  }
`;

const Search = () => {
  const [results, setResults] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");
  const [value, setValue] = React.useState("");

  useEffect(() => {
    async function fetchData() {
      const newResults = await getEveryLocation();
      setResults(newResults);
    }
    fetchData();
  }, []);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

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
      <RadioGroup
        row
        aria-label="type"
        name="type1"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel
          labelPlacement={"bottom"}
          value="shop"
          control={<Radio />}
          label="SHOP"
        />
        <FormControlLabel
          labelPlacement={"bottom"}
          value="venue"
          control={<Radio />}
          label="VENUE"
        />
        <FormControlLabel
          labelPlacement={"bottom"}
          value="poi"
          control={<Radio />}
          label="POI"
        />
      </RadioGroup>
      <LocationList>
        {results

          // .filter((results) => results.type.includes(poiFilter))
          // .filter((results) => results.type.includes(venueFilter))
          .filter((results) => results.name.includes(searchFilter))
          // .filter((results) => results.type.includes(shopFilter))
          .map((filterResult) => (
            <li key={filterResult.name}> {filterResult.name} </li>
          ))}
      </LocationList>
    </SearchDiv>
  );
};

export default Search;
