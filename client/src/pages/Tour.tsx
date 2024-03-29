import React from "react";
import styled from "styled-components/macro";

import { useQuery } from "react-query";
import { Link, useLocation } from "react-router-dom";
import { getTourDetails } from "../api/locations";
import PlayCard from "components/Card/PlayCard";
import LocationList from "components/Locations/LocationList";
import LeafletMapTour from "components/Map/LeafletMapTour";

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

const Tour: any = () => {
  let location = useLocation();

  const { pathname: locationName } = location;
  const {
    isLoading,
    error,
    data: TourDetails,
  } = useQuery(locationName, getTourDetails);

  if (isLoading) {
    return <p>Inhalt wird geladen...</p>;
  }
  if (error) {
    return `Ein Fehler ist aufgetreten: ${error}`;
  }

  return (
    <TourDiv>
      {TourDetails && (
        <>
          <h2>{TourDetails.name}</h2>
          <p>{TourDetails.description}</p>
          <PlayCard>
            Den passenden Sound zur Tour findest du hier:
            <div>
              {TourDetails.playlist.map((playlists) => (
                <a
                  key={playlists.link}
                  href={playlists.link}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img src={playlists.icon} alt={`${playlists.name}logo`} />
                </a>
              ))}
            </div>
          </PlayCard>
          <LocationList>
            {TourDetails.locationNames.map((tourLocation) => (
              <li key={tourLocation.name}>
                <Link to={`/location/${tourLocation.name}`}>
                  {tourLocation.name}
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
