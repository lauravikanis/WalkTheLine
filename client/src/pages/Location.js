import React from "react";
import styled from "styled-components/macro";
import PageHeadline from "../components/Header/PageHeadline";

import mappath from "../assets/map.svg";
import platzhalter from "../assets/platzhalter.jpeg";
import Card from "../components/Card/Card";
import ImageCard from "../components/Card/ImageCard";

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
      <Card>
        <p>
          Name <br /> Adress, <br />
          City + postcode <br />
          OpeningHours
        </p>
      </Card>
      <ImageCard>
        <img src={platzhalter} alt="Platzhalter" />
        <img src={platzhalter} alt="Platzhalter" />
        <img src={platzhalter} alt="Platzhalter" />
        <img src={platzhalter} alt="Platzhalter" />
        <img src={platzhalter} alt="Platzhalter" />
        <img src={platzhalter} alt="Platzhalter" />
      </ImageCard>
      <img src={mappath} alt="Platzhalter" />
    </TourDiv>
  );
};
export default Tour;
