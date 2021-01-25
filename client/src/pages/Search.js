import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";

import { getEveryLocation } from "../api/search";
import { Link } from "react-router-dom";

import {
  PageHeadline,
  Input,
  Form,
  Radio,
  Label,
  LocationList,
} from "../imports";

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

  summary {
    color: var(--primary-color);
    text-align: center;
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
      <PageHeadline>Suche</PageHeadline>
      <Input
        type="text"
        placeholder="🔍  Was willst du suchen?"
        value={searchFilter}
        onChange={(event) => setSearchFilter(event.target.value)}
      />
      <details>
        <summary>Suchfilter</summary>
        <Form>
          <Radio
            name="searchType"
            type="radio"
            id="all"
            value=""
            checked={searchType === ""}
            onChange={() => setSearchType("")}
          />
          <Label htmlFor="all" checked={searchType === "all"}>
            Kein Filter
          </Label>
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
      </details>
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
