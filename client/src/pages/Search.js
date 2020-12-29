import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";

import { getEveryLocation } from "../api/search";
import { Link } from "react-router-dom";

import { Header, PageHeadline, Input, LocationList } from "../imports";
// import Form from "../components/Input/Form";

const SearchDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  max-width: 600px;
  width: 90%;

  ol {
    margin-top: 0;
  }
  li {
    list-style: none;
  }
`;

const Form = styled.form`
  display: flex;
  text-align: center;
  width: 100%;
`;

const Radio = styled.input`
  opacity: 0;
  position: fixed;
  width: 0;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 15px;
  border: 3px solid var(--primary-color);
  width: 25%;
  max-width: 150px;
  height: 50px;
  margin: 0.75rem auto;
  color: var(--primary-color);
  font-size: 1rem;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  transition: 0.25s;

  ${Radio}:checked + & {
    background-color: var(--primary-color);
    color: white;
    border: 3px solid var(--primary-color);
  }
`;

const Search = () => {
  const [results, setResults] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");
  const [searchType, setSearchType] = useState("");

  useEffect(() => {
    async function fetchData() {
      const newResults = await getEveryLocation();
      setResults(newResults);
    }
    fetchData();
  }, []);

  return (
    <SearchDiv>
      <Header />
      <PageHeadline>Suche</PageHeadline>
      <Input
        type="text"
        placeholder="🔍  Was willst du suchen?"
        value={searchFilter}
        onChange={(event) => setSearchFilter(event.target.value)}
      />

      <Form>
        <Radio
          name="searchType"
          type="radio"
          id="shop"
          value="shop"
          checked={searchType === "shop"}
          onChange={() => setSearchType("shop")}
        />
        <Label htmlFor="shop" checked={searchType === "shop"}>
          shop
        </Label>
        <Radio
          name="searchType"
          type="radio"
          id="venue"
          value="venue"
          checked={searchType === "venue"}
          onChange={() => setSearchType("venue")}
        />
        <Label htmlFor="venue">venue</Label>
        <Radio
          name="searchType"
          type="radio"
          id="poi"
          value="poi"
          checked={searchType === "poi"}
          onChange={() => setSearchType("poi")}
        />
        <Label htmlFor="poi">poi</Label>
      </Form>
      <LocationList>
        {results

          .filter((results) => new RegExp(searchFilter, "i").test(results.name))
          .filter((results) => results.type.includes(searchType))
          .map((filterResult) => (
            <li key={filterResult.name}>
              <Link to={`/location/${filterResult.name}`}>
                {filterResult.name}
              </Link>
            </li>
          ))}
      </LocationList>
    </SearchDiv>
  );
};

export default Search;
