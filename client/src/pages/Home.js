import React from "react";
import styled from "styled-components/macro";
import tourPath from "../assets/tour.svg";
import searchPath from "../assets/search.svg";
import favoritePath from "../assets/favorites.svg";
import { Link } from "react-router-dom";
import "leaflet/dist/leaflet.css";

import { Card, PageHeadline } from "../imports";
import CoronaNote from "../components/Note/Note";

const HomeDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  max-width: 600px;
  width: 90%;

  h5 {
    text-align: center;
    margin: 0 auto;
  }
`;

const Home = () => {
  return (
    <HomeDiv>
      <PageHeadline>HOME</PageHeadline>
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
      <CoronaNote />
      <Link to="/disclaimer">
        <h5>Disclaimer</h5>
      </Link>
    </HomeDiv>
  );
};

export default Home;
