import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { getEveryLocation } from "../api/search";
import RadioButton from "../components/Button/Button";
// import Button from "../components/Button/Button";
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

const ButtonBar = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  max-width: 600px;
  width: 90%;
`;

const Search = () => {
  const [results, setResults] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");
  // const [shopFilter, setShopFilter] = useState("");
  // const [poiFilter, setPoiFilter] = useState(false);
  const [TypeFilter, setTypeFilter] = useState(false);

  const [clickState, setClickState] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const newResults = await getEveryLocation();
      // setShopFilter();
      setResults(newResults);
      console.log(newResults);
    }
    fetchData();
  }, []);

  const handleOptionChange = (event) => {
    event.preventDefault();
    setClickState({
      selectedOption: event.target.value,
    });
  };

  const handleSubmit = (event) => event.preventDefault();

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
      <ButtonBar onSubmit={handleSubmit}>
        <RadioButton
          label="shop"
          value="option1"
          name="shop"
          checked={setTypeFilter.selectedOption === "option1"}
          onChange={{ handleOptionChange }}
        />
        <RadioButton
          label="poi"
          value="option1"
          name="poi"
          checked={setTypeFilter.selectedOption === "option2"}
          onChange={{ handleOptionChange }}
        />
        <RadioButton
          label="venue"
          value="option3"
          name="venue"
          checked={setTypeFilter.selectedOption === "option3"}
          onChange={{ handleOptionChange }}
        />
      </ButtonBar>
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
