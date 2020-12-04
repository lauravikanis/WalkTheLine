import React from "react";
import styled from "styled-components/macro";
import PageHeadline from "../components/Header/PageHeadline";
import placeholder from "../assets/placeholder.jpeg";
import ImageCard from "../components/Card/ImageCard";
import Placeholder from "../components/Placeholder/Placeholder";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { getLocationByName } from "../api/locations";
import DetailCard from "../components/Card/LocationDetails";

const LocationDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  max-width: 600px;
  width: 90%;

  p {
    align-self: center;
    font-size: 16p;
  }
`;

const Location = () => {
  const { isLoading, error, data: LocationByName } = useQuery(
    "locationName",
    getLocationByName
  );
  // console.log(LocationByName);
  if (isLoading) {
    return "Loading...";
  }

  if (error) {
    return `An error has occurred: ${error.message}`;
  }
  console.log(LocationByName.address);

  return (
    <LocationDiv>
      <PageHeadline>{LocationByName.name}</PageHeadline>
      <p>{LocationByName.about}</p>
      <DetailCard>
        <p>{LocationByName.name}</p>
        <p>
          {LocationByName.address[0]}&nbsp;
          {LocationByName.address[1]}
        </p>
        <p>
          {LocationByName.address[2]}&nbsp;
          {LocationByName.address[3]}
        </p>
        <p> {LocationByName.openingHours}</p>
      </DetailCard>
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
