import React from "react";
import styled from "styled-components/macro";
import Card from "../components/Card/Card";
import tourPath from "../assets/tour.svg";
import searchPath from "../assets/search.svg";
import favoritePath from "../assets/favourites.svg";
import PageHeadline from "../components/Header/PageHeadline";

const ChoiceDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  height: 90vh;

  h2 {
    text-align: center;
  }
`;

const Home = () => {
  return (
    <ChoiceDiv>
      <PageHeadline>CHOICE</PageHeadline>
      <Card>
        <h2>ELECTRONICA</h2>
        <img src={tourPath} alt="touricon" />
      </Card>
      <Card>
        <h2>JAZZ</h2>
        <img src={searchPath} alt="searchicon" />
      </Card>
      <Card>
        <h2>(INDIE-) ROCK</h2>
        <img src={favoritePath} alt="favoriteicon" />
      </Card>
    </ChoiceDiv>
  );
};
export default Home;
