import React from "react";
import styled from "styled-components/macro";

import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getLocationByName } from "../api/locations";
import useFavorites from "../hooks/useFavorites";
import placeholder from "../assets/search.svg";

import {
  DetailCard,
  PageHeadline,
  FavoriteButton,
  LeafletMap,
  ImageCard,
  Image,
} from "../imports";
import AddImage from "../components/Image/ImageAdd";

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
    return "Laden...";
  }

  if (error) {
    return `Ein Fehler ist aufgetreten: ${error.message}`;
  }

  return (
    <LocationDiv>
      {locationByName && (
        <>
          <PageHeadline>
            {locationByName.name}
            <FavoriteButton
              onClick={() => toggleFavorite(locationByName.name)}
              isFavorite={favorites.includes(locationByName.name)}
            />
          </PageHeadline>
          <p>{locationByName.about}</p>
          <DetailCard>
            {locationByName.address.map((locationAddress) => (
              <p key={locationAddress}> {locationAddress} </p>
            ))}
            {locationByName.openingHours && (
              <p> {locationByName.openingHours}</p>
            )}

            {locationByName.website && (
              <p>
                <a href={locationByName.website}>{locationByName.website}</a>
              </p>
            )}
          </DetailCard>

          {locationByName.pic && (
            <ImageCard>
              {locationByName.pic.map((locationPic) => (
                <>
                  <Image
                    key={locationPic.link}
                    locationname={name}
                    picname={locationPic.name}
                    src={locationPic.link}
                    alt={locationPic.name}
                  />
                </>
              ))}
              <AddImage
                key="addImage"
                locationname={name}
                picname="addImage"
                src={placeholder}
                alt="addImage"
              />
            </ImageCard>
          )}

          <LeafletMap
            zoomdistance="16"
            mapCenter={locationByName.position}
            markerPosition={locationByName.position}
            locationName={name}
          />
        </>
      )}
    </LocationDiv>
  );
};
export default Location;
