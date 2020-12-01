import React from "react";
import styled from "styled-components/macro";
import Card from "../components/Card/Card";
import tourPath from "../assets/tour.svg";
import searchPath from "../assets/search.svg";
import favoritePath from "../assets/favourites.svg";
import PageHeadline from "../components/Header/PageHeadline";
import { Link } from "react-router-dom";

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
      <Link to="/choice">
        <Card primary>
          <h2>TOUR</h2>
          <img src={tourPath} alt="touricon" />
        </Card>
      </Link>
      <Link to="search">
        <Card primary>
          <h2>SUCHE</h2>
          <img src={searchPath} alt="searchicon" />
        </Card>
      </Link>
      <Link to="/favourites">
        <Card primary>
          <h2>FAVORITEN</h2>
          <img src={favoritePath} alt="favoriteicon" />
        </Card>
      </Link>
    </HomeDiv>
  );
};
export default Home;
