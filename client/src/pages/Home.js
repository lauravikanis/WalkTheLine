import React from "react";
import styled from "styled-components/macro";
import Card from "../components/Card/Card";
import tourPath from "../assets/tour.svg";
import searchPath from "../assets/search.svg";
import favoritePath from "../assets/favourites.svg";
import PageHeadline from "../components/Header/PageHeadline";

const HomeDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  height: 90vh;
`;

const Home = () => {
  return (
    <HomeDiv>
      <PageHeadline>HOME</PageHeadline>
      <Card primary>
        <h2>TOUR</h2>
        <img src={tourPath} alt="touricon" />
      </Card>
      <Card primary>
        <h2>SUCHE</h2>
        <img src={searchPath} alt="searchicon" />
      </Card>
      <Card primary>
        <h2>FAVORITEN</h2>
        <img src={favoritePath} alt="favoriteicon" />
      </Card>
    </HomeDiv>
  );
};
export default Home;
