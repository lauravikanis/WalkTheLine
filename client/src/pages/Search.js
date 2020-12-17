import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { getEveryLocation } from "../api/search";

import Header from "../components/Header/Header";

import PageHeadline from "../components/Header/PageHeadline";
import Input from "../components/Input/Input";
import LocationList from "../components/Standorte/LocationList";

// import Radio from "@material-ui/core/Radio";
// import RadioGroup from "@material-ui/core/RadioGroup";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Link } from "react-router-dom";

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

// const RadioForm = styled(RadioGroup)`
//   display: flex;
//   justify-content: center;

//   span {
//     color: var(--primary-color);
//     font-family: var(--titleFont);
//     font-weight: bold;
//     text-transform: uppercase;
//   }
// `;

const Search = () => {
  const [results, setResults] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");
  // const [type, setType] = useState("");

  useEffect(() => {
    async function fetchData() {
      const newResults = await getEveryLocation();
      setResults(newResults);
    }
    fetchData();
  }, []);

  // const handleChange = (event) => {
  //   setType(event.target.value);
  // };

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
      {/* <RadioForm
        row
        aria-label="type"
        name="type1"
        value={type}
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
      </RadioForm> */}
      <LocationList>
        {results

          // .filter((results) => results.type.includes(type))
          // .filter((results) => results.name.includes(searchFilter))
          .filter((results) => new RegExp(searchFilter, "i").test(results.name))
          .map((filterResult) => (
            <li key={filterResult.name}>
              <Link to={`/location/${filterResult.name}`}>
                {" "}
                {filterResult.name}{" "}
              </Link>
            </li>
          ))}
      </LocationList>
    </SearchDiv>
  );
};

export default Search;
