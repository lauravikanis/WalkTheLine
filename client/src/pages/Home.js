import React from "react";
import styled from "styled-components/macro";
import tourPath from "../assets/tour.svg";
import searchPath from "../assets/search.svg";
import favoritePath from "../assets/favorites.svg";
import { Link } from "react-router-dom";
import "leaflet/dist/leaflet.css";

import { Header, Card, PageHeadline } from "../imports";
import CoronaNote from "../components/Note/Note";

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
      <CoronaNote />

      <Link to="/choice">
        <Card>
          <h2>Los gehts!</h2>
          <img src={tourPath} alt="touricon" />
        </Card>
      </Link>
      <Link to="/search">
        <Card>
          <h2>SUCHE</h2>
          <img src={searchPath} alt="searchicon" />
        </Card>
      </Link>
      <Link to="/favorites">
        <Card>
          <h2>FAVORITEN</h2>
          <img src={favoritePath} alt="favoriteicon" />
        </Card>
      </Link>
    </HomeDiv>
  );
};
export default Home;
