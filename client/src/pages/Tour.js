import React from "react";
import styled from "styled-components/macro";
import PageHeadline from "../components/Header/PageHeadline";
import Standort from "../components/Standorte/Standort";
import mappath from "../assets/map.svg";
// import { Link } from "react-router-dom";
import { useQuery } from "react-query";

import { getLocationNamebyTour } from "../api/locations";
import { Link } from "react-router-dom";
import PictureContainer from "../components/Image/Picture";

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
        Köln und elektronische Musik passt einfach zusammen – schließlich sind
        wir weltweit für den &quot; Sound of Cologne&quot; bekannt. Aber wohin
        gehen, wenn man guten Electro hören oder shoppen möchte? Wo gibt6&apos;s
        geile Partys? Wohin kommen die besten DJs?
      </p>
      <Standort>
        {LocationNamebyTour.map((name) => (
          <li key={name}>
            <Link to={`/Location/${name}`}>{name}</Link>
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
