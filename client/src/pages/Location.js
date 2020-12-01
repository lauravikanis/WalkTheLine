import React from "react";
import styled from "styled-components/macro";
import PageHeadline from "../components/Header/PageHeadline";
import placeholder from "../assets/placeholder.jpeg";
import Card from "../components/Card/Card";
import ImageCard from "../components/Card/ImageCard";
import Placeholder from "../components/Placeholder/Placeholder";
import { Link } from "react-router-dom";

const TourDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
`;

const Tour = () => {
  return (
    <TourDiv>
      <PageHeadline>Location</PageHeadline>
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
        <Link to="/Pictures">
          <img src={placeholder} alt="placeholder" />
        </Link>
        <img src={placeholder} alt="placeholder" />
        <img src={placeholder} alt="placeholder" />
        <img src={placeholder} alt="placeholder" />
        <img src={placeholder} alt="placeholder" />
        <img src={placeholder} alt="placeholder" />
      </ImageCard>
      <Placeholder />
    </TourDiv>
  );
};
export default Tour;
