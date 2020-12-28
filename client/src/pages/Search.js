import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";

import { getEveryLocation } from "../api/search";
import { Link } from "react-router-dom";

import { Header, PageHeadline, Input, LocationList } from "../imports";
import Form from "../components/Input/Form";

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
  const [type, setType] = useState("");
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const newResults = await getEveryLocation();
      setResults(newResults);
    }
    fetchData();
  }, []);

  const handleOptionChange = (event) => {
    setChecked(event.target.value);
    setType(event.target.value);
  };

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

      <Form onChange={handleOptionChange}>
        <label>
          <input
            type="radio"
            value="shop"
            checked={checked === "shop"}
            onChange={(event) => setType(event.target.value)}
          />
          shop
        </label>
        <label>
          <input
            type="radio"
            value="venue"
            checked={checked === "venue"}
            onChange={(event) => setType(event.target.value)}
          />
          venue{" "}
        </label>
        <label>
          <input
            type="radio"
            value="poi"
            checked={checked === "poi"}
            onChange={(event) => setType(event.target.value)}
          />
          poi
        </label>
      </Form>

      <LocationList>
        {results

          .filter((results) => new RegExp(searchFilter, "i").test(results.name))
          .filter((results) => results.type.includes(type))
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
