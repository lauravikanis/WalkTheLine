import React from "react";
import styled from "styled-components/macro";
import PageHeadline from "../components/Header/PageHeadline";
import placeholder from "../assets/placeholder.jpeg";
import ImageCard from "../components/Card/ImageCard";
import mappath from "../assets/map.svg";

import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getLocationByName } from "../api/locations";
import DetailCard from "../components/Card/LocationDetails";
import PictureContainer from "../components/Image/Picture";
import useFavorites from "../hooks/useFavorites";
import FavouriteIcon from "../components/Favourite/FavouriteButton";

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
  const { isLoading, error, data: LocationByName } = useQuery(
    name,
    getLocationByName
  );
  if (isLoading) {
    return "Loading...";
  }

  if (error) {
    return `An error has occurred: ${error.message}`;
  }

  // const handleClick = () => {
  //   (toggleFavorite(name);
  // };

  console.log(LocationByName.name);
  return (
    <LocationDiv>
      <PageHeadline>
        {LocationByName.name}
        <FavouriteIcon
          onClick={() => toggleFavorite(LocationByName.name)}
          isFavorite={favorites.includes(LocationByName.name)}
        />
      </PageHeadline>
      <p>{LocationByName.about}</p>
      <DetailCard>
        {LocationByName.address.map((name) => (
          <p key={name}> {name} </p>
        ))}
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
        <PictureContainer>
          <img src={mappath} alt="placeholder" />
        </PictureContainer>
      </Link>
    </LocationDiv>
  );
};
export default Location;
