import React from "react";
import styled from "styled-components/macro";
import Card from "../components/Card/Card";
import tourPath from "../assets/tour.svg";
import searchPath from "../assets/search.svg";
import favoritePath from "../assets/favorites.svg";
import PageHeadline from "../components/Header/PageHeadline";
import { Link } from "react-router-dom";

import "leaflet/dist/leaflet.css";
import Header from "../components/Header/Header";

const HomeDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  max-width: 600px;
  width: 90%;
`;

const Home = () => {
  return (
    <HomeDiv>
      <Header />

      <PageHeadline>HOME</PageHeadline>
      <Link to="/choice">
        <Card primary>
          <h2>TOUR</h2>
          <img src={tourPath} alt="touricon" />
        </Card>
      </Link>
      <Link to="/search">
        <Card primary>
          <h2>SUCHE</h2>
          <img src={searchPath} alt="searchicon" />
        </Card>
      </Link>
      <Link to="/favorites">
        <Card primary>
          <h2>FAVORITEN</h2>
          <img src={favoritePath} alt="favoriteicon" />
        </Card>
      </Link>
    </HomeDiv>
  );
};
export default Home;
