import Card from "components/Card/Card";
import "leaflet/dist/leaflet.css";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import favoritePath from "../assets/favorites.svg";
import searchPath from "../assets/search.svg";
import tourPath from "../assets/tour.svg";

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

const Home: any = () => {
  return (
    <HomeDiv>
      <h2>HOME</h2>
      <p>
        Schön das du hier bist! Wähle dein Liebelingsgenre, suche nach einer
        bstimmten Location oder schau nach deinen Lieblingslocations.
      </p>
      <Link to="/choice">
        <Card name="WÄHLE DEIN GENRE" src={tourPath} alt="touricon" />
      </Link>
      <Link to="/search">
        <Card name="LOCATION SUCHE" src={searchPath} alt="searchicon" />
      </Link>
      <Link to="/favorites">
        <Card name="FAVORITEN" src={favoritePath} alt="favoriteicon" />
      </Link>
      <Link to="/disclaimer">
        <h5>Disclaimer</h5>
      </Link>
    </HomeDiv>
  );
};

export default Home;
