import React from "react";
import styled from "styled-components/macro";
import jazzPath from "../assets/jazz.svg";
import indierockPath from "../assets/indierock.svg";
import electronicaPath from "../assets/electronica.svg";
import { Link } from "react-router-dom";
import { Header, PageHeadline, Card } from "../imports";

const ChoiceDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  max-width: 600px;
  width: 90%;
`;

const Home = () => {
  return (
    <ChoiceDiv>
      <Header />
      <PageHeadline>CHOICE</PageHeadline>
      <Link to="/tour/electronic">
        <Card>
          <h2>ELECTRONICA</h2>
          <img src={electronicaPath} alt="touricon" />
        </Card>
      </Link>
      <Link to="/tour/jazz">
        <Card>
          <h2>JAZZ</h2>
          <img src={jazzPath} alt="searchicon" />
        </Card>
      </Link>
      <Link to="/tour/indie">
        <Card>
          <h2>(INDIE-) ROCK</h2>
          <img src={indierockPath} alt="favoriteicon" />
        </Card>
      </Link>
    </ChoiceDiv>
  );
};
export default Home;
