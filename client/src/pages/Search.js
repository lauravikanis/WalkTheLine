import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { getEveryLocation } from "../api/search";
// import RadioButton from "../components/Button/Button";

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

  li {
    list-style: none;
  }
`;

// const ButtonBar = styled.form`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: space-around;
//   max-width: 600px;
//   width: 90%;
// `;

const Search = () => {
  const [results, setResults] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");

  // const [TypeFilter, setTypeFilter] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const newResults = await getEveryLocation();
      setResults(newResults);
    }
    fetchData();
  }, []);

  // const handleOptionChange = (event) => {
  //   event.preventDefault();
  //   setTypeFilter({
  //     checked: event.target.value,
  //   });
  // };

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
      {/* <ButtonBar onSubmit={(event) => TypeFilter(event.target.value)}>
        <RadioButton
          value="shop"
          name="type"
          checked={setTypeFilter.value === "shop"}
          onChange={handleOptionChange}
        />
        <RadioButton
          value="poi"
          name="type"
          checked={setTypeFilter.value === "poi"}
          onChange={handleOptionChange}
        />
        <RadioButton
          value="venue"
          name="type"
          checked={setTypeFilter.value === "venue"}
          onChange={handleOptionChange}
        />
      </ButtonBar> */}
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
