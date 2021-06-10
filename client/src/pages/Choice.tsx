import React from "react";
import styled from "styled-components/macro";
import jazzPath from "../assets/jazz.svg";
import indierockPath from "../assets/indierock.svg";
import electronicaPath from "../assets/electronica.svg";
import { Link } from "react-router-dom";
import Card from "components/Card/Card";

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
      <h2>CHOICE</h2>
      <Link to="/tour/electronic">
        <Card name="ELECTRONICA" src={electronicaPath} alt="tour" />
      </Link>
      <Link to="/tour/indie">
        <Card name="(INDIE-) ROCK" src={indierockPath} alt="favorite" />
      </Link>
      <Link to="/tour/jazz">
        <Card name="JAZZ" src={jazzPath} alt="search" />
      </Link>
    </ChoiceDiv>
  );
};
export default Home;
