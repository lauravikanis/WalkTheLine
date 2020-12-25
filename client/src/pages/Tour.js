import React from "react";
import styled from "styled-components/macro";

import { useQuery } from "react-query";
import { Link, useLocation } from "react-router-dom";
import { getTourDetails } from "../api/locations";

import { Header, PageHeadline, LocationList, LeafletMapTour } from "../imports";

const TourDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  max-width: 600px;
  width: 90%;

  p {
    align-self: center;
  }
`;

const Tour = () => {
  let location = useLocation();

  const { isLoading, error, data: TourDetails } = useQuery(
    location.pathname,
    getTourDetails
  );

  if (isLoading) {
    return "Laden...";
  }
  if (error) {
    return `Ein Fehler ist aufgetreten: ${error.message}`;
  }

  console.log(TourDetails);

  return (
    <TourDiv>
      <Header />

      {TourDetails && (
        <>
          <PageHeadline>{TourDetails.name}</PageHeadline>
          <p>{TourDetails.description}</p>
          <LocationList>
            {TourDetails.locationNames.map((locationName) => (
              <li key={locationName.name}>
                <Link to={`/location/${locationName.name}`}>
                  {locationName.name}
                </Link>
              </li>
            ))}
          </LocationList>
          <LeafletMapTour />
        </>
      )}
    </TourDiv>
  );
};
export default Tour;
