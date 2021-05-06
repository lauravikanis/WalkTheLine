import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";

import { getEveryLocation } from "../api/search";
import { Link } from "react-router-dom";
import Input from "components/Input/Input";
import Form from "components/Input/Form";
import Radio from "components/Input/Radio";
import Label from "components/Input/Label";
import LocationList from "components/Locations/LocationList";

const SearchDiv: any = styled.div`
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
    color: ${(props) => props.theme.headColor};
    text-align: center;
  }
`;

const Search: any = () => {
  const [results, setResults]: any = useState([]);
  const [searchFilter, setSearchFilter]: any = useState("");
  const [searchType, setSearchType]: any = useState("");

  useEffect(() => {
    async function fetchData() {
      const newResults: any = await getEveryLocation();
      setResults(newResults);
    }
    fetchData();
  }, []);

  return (
    <SearchDiv>
      <h2>Suche</h2>
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
