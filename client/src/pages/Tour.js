import React from "react";
import styled from "styled-components/macro";
import PageHeadline from "../components/Header/PageHeadline";
import Standort from "../components/Standorte/Standort";
import mappath from "../assets/map.svg";
import { useQuery } from "react-query";

import { Link, useParams } from "react-router-dom";
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
  const { tourName } = useParams();

  const { isLoading, error, data: TourDetails } = useQuery(
    tourName,
    getTourDetails
  );

  if (isLoading) {
    return "Loading...";
  }
  if (error) {
    return `An error has occurred: ${error.message}`;
  }
  console.log(TourDetails);
  return (
    <TourDiv>
      <PageHeadline>Electronic</PageHeadline>
      <p>{TourDetails.description}</p>
      <Standort>
        {/* {TourDetails.map((locationNames) => (
          <li key={locationNames}>
            <Link to={`/Location/${locationNames}`}>{locationNames}</Link>
          </li>
        ))} */}
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
