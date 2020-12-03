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

  if (isLoading) {
    return "Loading...";
  }

  if (error) {
    return `An error has occurred: ${error.message}`;
  }

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
        {LocationNamebyTour.map((location) => (
          <li key={location.id}>{location.name}</li>
        ))}
      </Standort>
      <img src={mappath} alt="placeholder" />
    </TourDiv>
  );
};
export default Tour;
