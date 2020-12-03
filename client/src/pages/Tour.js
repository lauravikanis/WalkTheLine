import React from "react";
import styled from "styled-components/macro";
import PageHeadline from "../components/Header/PageHeadline";
import Standort from "../components/Standorte/Standort";
import mappath from "../assets/map.svg";
// import { Link } from "react-router-dom";
import { useQuery } from "react-query";

import { getLocationNamebyTour } from "../api/locations";

const TourDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  max-width: 600px;
`;

const Tour = () => {
  const { isLoading, error, data: LocationNamebyTour } = useQuery(
    "locationName",
    getLocationNamebyTour
  );
  console.log(LocationNamebyTour);
  if (isLoading) {
    return "Loading...";
  }

  if (error) {
    return `An error has occurred: ${error.message}`;
  }

  return (
    <TourDiv>
      <PageHeadline>Electronica</PageHeadline>
      <p>
        Hier steht ein toller Text zum Thema elektronische Musik in Köln. Von
        Stockhausn bis zu Sound of Cologne ist alles dabei.
      </p>
      <Standort>
        {/* need to Link to location in next pull */}
        {LocationNamebyTour.map((location) => (
          <li key={location}>{location}</li>
        ))}
      </Standort>
      <img src={mappath} alt="placeholder" />
    </TourDiv>
  );
};
export default Tour;
