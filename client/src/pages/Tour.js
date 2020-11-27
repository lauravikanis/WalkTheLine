import React from "react";
import styled from "styled-components/macro";
import PageHeadline from "../components/Header/PageHeadline";
import Standort from "../components/Standorte/Standort";
import mappath from "../assets/map.svg";

const TourDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
`;

const Tour = () => {
  return (
    <TourDiv>
      <PageHeadline>Tourname</PageHeadline>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed optio a
        beatae ducimus fuga assumenda recusandae nam, quam facere maxime
        accusamus dolore numquam provident libero voluptas animi quas vitae
        incidunt.
      </p>
      <Standort>
        <li>Standort</li>
        <li>Standort</li>
        <li>Standort</li>
        <li>Standort</li>
        <li>Standort</li>
        <li>Standort</li>
      </Standort>
      <img src={mappath} alt="placeholder" />
    </TourDiv>
  );
};
export default Tour;
