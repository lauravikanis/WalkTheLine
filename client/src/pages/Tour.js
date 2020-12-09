import React from "react";
import styled from "styled-components/macro";
import PageHeadline from "../components/Header/PageHeadline";
import Standort from "../components/Standorte/Standort";
import mappath from "../assets/map.svg";
import { useQuery } from "react-query";

import { Link, useLocation } from "react-router-dom";
import PictureContainer from "../components/Image/Picture";
import { getTourDetails } from "../api/locations";

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
  // const { name } = useParams();
  let location = useLocation();
  // console.log(location.pathname);

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
  // console.log(TourDetails.locationNames);
  return (
    <TourDiv>
      <PageHeadline>{TourDetails.name}</PageHeadline>
      <p>{TourDetails.description}</p>
      <Standort>
        {TourDetails.locationNames.map((locationNames) => (
          <li key={locationNames}>
            <Link to={`/Location/${locationNames}`}>{locationNames}</Link>
          </li>
        ))}
      </Standort>
      <Link to="/map">
        <PictureContainer>
          <img src={mappath} alt="placeholder" />
        </PictureContainer>
      </Link>
    </TourDiv>
  );
};
export default Tour;
