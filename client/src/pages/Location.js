import React from "react";
import styled from "styled-components/macro";
import PageHeadline from "../components/Header/PageHeadline";
import platzhalter from "../assets/platzhalter.jpeg";
import Card from "../components/Card/Card";
import ImageCard from "../components/Card/ImageCard";
import Placeholder from "../components/Placeholder/Placeholder";

const TourDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
`;

const Tour = () => {
  return (
    <TourDiv>
      <PageHeadline>Platzhalter</PageHeadline>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed optio a
        beatae ducimus fuga assumenda recusandae nam, quam facere maxime
        accusamus dolore numquam provident libero voluptas animi quas vitae
        incidunt.
      </p>
      <Card details>
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
      <Placeholder />
    </TourDiv>
  );
};
export default Tour;
