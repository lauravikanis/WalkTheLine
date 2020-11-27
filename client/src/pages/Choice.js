import React from "react";
import styled from "styled-components/macro";
import Card from "../components/Card/Card";
import jazzPath from "../assets/jazz.svg";
import indierockPath from "../assets/indierock.svg";
import electronicaPath from "../assets/electronica.svg";
import PageHeadline from "../components/Header/PageHeadline";

const ChoiceDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  height: 90vh;
`;

const Home = () => {
  return (
    <ChoiceDiv>
      <PageHeadline>CHOICE</PageHeadline>
      <Card>
        <h2>ELECTRONICA</h2>
        <img src={electronicaPath} alt="touricon" />
      </Card>
      <Card>
        <h2>JAZZ</h2>
        <img src={jazzPath} alt="searchicon" />
      </Card>
      <Card>
        <h2>(INDIE-) ROCK</h2>
        <img src={indierockPath} alt="favoriteicon" />
      </Card>
    </ChoiceDiv>
  );
};
export default Home;
