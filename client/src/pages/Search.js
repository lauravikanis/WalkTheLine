import React from "react";

import styled from "styled-components/macro";
import { getLocationByName } from "../api/locations";

import PageHeadline from "../components/Header/PageHeadline";
import Input from "../components/Input/Input";

import Searchbar from "../components/SearchBar/Searchbar";
import Standort from "../components/Standorte/Standort";

const SearchDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  max-width: 600px;
`;

// const ButtonDiv = styled.div`
//   display: flex;
//   flex-direction: row;
// `;

const Search = () => {
  // const { searchValue } = useParams();

  // const { isLoading, error, data: TourDetails } = useQuery(
  //   { searchValue },
  //   getLocationByName
  // );

  // if (isLoading) {
  //   return "Loading...";
  // }
  // if (error) {
  //   return `An error has occurred: ${error.message}`;
  // }
  console.log(getLocationByName());

  return (
    <SearchDiv>
      <PageHeadline>Suche</PageHeadline>
      <Searchbar>
        <Input
        // value={searchValue}
        // type="text"
        // placeholder="🔍  Was willst du suchen?"
        />
      </Searchbar>
      <Standort>
        {/* {TourDetails.searchValue.map((searchValue) => (
          <li key={searchValue}>
            <Link to={`/Location/${searchValue}`}>{searchValue}</Link>
          </li>
        ))} */}
      </Standort>
    </SearchDiv>
  );
};

export default Search;
