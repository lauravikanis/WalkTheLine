import React from "react";
import styled from "styled-components/macro";
import PageHeadline from "../components/Header/PageHeadline";
import placeholder from "../assets/placeholder.jpeg";
import Card from "../components/Card/Card";
import ImageCard from "../components/Card/ImageCard";
import Placeholder from "../components/Placeholder/Placeholder";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { getLocationByName } from "../api/locations";

const LocationDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  max-width: 600px;

  p {
    width: 500px;
  }
`;

const Location = () => {
  const { isLoading, error, data: LocationByName } = useQuery(
    "locationName",
    getLocationByName
  );
  console.log(LocationByName);
  if (isLoading) {
    return "Loading...";
  }

  if (error) {
    return `An error has occurred: ${error.message}`;
  }

  return (
    <LocationDiv>
      <PageHeadline>{LocationByName.name}</PageHeadline>
      <p>{LocationByName.about}</p>
      <Card details>
        <p>
          {LocationByName.openingHours}
          <br /> {LocationByName.adress}
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
      </ImageCard>
      <Link to="/map">
        <Placeholder />
      </Link>
    </LocationDiv>
  );
};
export default Location;
