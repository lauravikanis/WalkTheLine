import React from "react";
import styled from "styled-components/macro";
import Card from "../components/Card/Card";
import jazzPath from "../assets/jazz.svg";
import indierockPath from "../assets/indierock.svg";
import electronicaPath from "../assets/electronica.svg";
import PageHeadline from "../components/Header/PageHeadline";
import { Link } from "react-router-dom";

const ChoiceDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  max-width: 600px;
`;

const Home = () => {
  return (
    <ChoiceDiv>
      <PageHeadline>CHOICE</PageHeadline>
      <Link to="/tour/electronic">
        <Card>
          <h2>ELECTRONICA</h2>
          <img src={electronicaPath} alt="touricon" />
        </Card>
      </Link>
      <Link to="tour/jazz">
        <Card hidden>
          <h2>JAZZ</h2>
          <img src={jazzPath} alt="searchicon" />
        </Card>
      </Link>
      <Link to="tour/indie">
        <Card hidden>
          <h2>(INDIE-) ROCK</h2>
          <img src={indierockPath} alt="favoriteicon" />
        </Card>
      </Link>
    </ChoiceDiv>
  );
};
export default Home;
