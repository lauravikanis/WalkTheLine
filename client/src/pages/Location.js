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
  max-width: 600px;

  p {
    width: 500px;
  }
`;

const Tour = () => {
  return (
    <TourDiv>
      <PageHeadline>Location</PageHeadline>
      <p>data.about</p>
      <Card details>
        <p>
          Name <br /> Adress, <br />
          City + postcode <br />
          OpeningHours
        </p>
      </Card>
      <ImageCard>
        <Link to="/pictures">
          <img src={placeholder} alt="placeholder" />
        </Link>
        <Link to="/pictures">
          <img src={placeholder} alt="placeholder" />
        </Link>
        <Link to="/pictures">
          <img src={placeholder} alt="placeholder" />
        </Link>
        <Link to="/pictures">
          <img src={placeholder} alt="placeholder" />
        </Link>
        <Link to="/pictures">
          <img src={placeholder} alt="placeholder" />
        </Link>
        <Link to="/pictures">
          <img src={placeholder} alt="placeholder" />
        </Link>
      </ImageCard>
      <Link to="/map">
        <Placeholder />
      </Link>
    </TourDiv>
  );
};
export default Tour;
