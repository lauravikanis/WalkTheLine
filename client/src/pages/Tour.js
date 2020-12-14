import React from "react";
import styled from "styled-components/macro";
import PageHeadline from "../components/Header/PageHeadline";
import LocationList from "../components/Standorte/LocationList";
import { useQuery } from "react-query";

import { Link, useLocation } from "react-router-dom";
import { getTourDetails } from "../api/locations";
import LeafletMap from "../components/Map/LeafletMap_Tour";

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
    return "Loading...";
  }
  if (error) {
    return `An error has occurred: ${error.message}`;
  }
  return (
    <TourDiv>
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
          <LeafletMap />
        </>
      )}
    </TourDiv>
  );
};
export default Tour;
