import React from "react";
import styled from "styled-components/macro";
import PageHeadline from "../components/Header/PageHeadline";
import placeholder from "../assets/placeholder.jpeg";
import ImageCard from "../components/Card/ImageCard";

import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getLocationByName } from "../api/locations";
import DetailCard from "../components/Card/LocationDetails";
import useFavorites from "../hooks/useFavorites";
import FavouriteButton from "../components/Favourite/FavouriteButton";
import LeafletMap from "../components/Map/LeafletMap";

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
  const { name } = useParams();
  const { toggleFavorite, favorites } = useFavorites("favorites", []);
  const { isLoading, error, data: locationByName } = useQuery(
    name,
    getLocationByName
  );
  if (isLoading) {
    return "Loading...";
  }

  if (error) {
    return `An error has occurred: ${error.message}`;
  }

  console.log(locationByName.name);
  return (
    <LocationDiv>
      <PageHeadline>
        {locationByName.name}
        <FavouriteButton
          onClick={() => toggleFavorite(locationByName.name)}
          isFavorite={favorites.includes(locationByName.name)}
        />
      </PageHeadline>
      <p>{locationByName.about}</p>
      <DetailCard>
        {locationByName.address.map((name) => (
          <p key={name}> {name} </p>
        ))}
        <p> {locationByName.openingHours}</p>
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
      <LeafletMap />
    </LocationDiv>
  );
};
export default Location;
