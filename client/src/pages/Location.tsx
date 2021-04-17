import React from "react";
import styled from "styled-components/macro";

import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getLocationByName } from "../api/locations";
import useFavorites from "../hooks/useFavorites";

import AddImage from "../components/Image/ImageAdd";
import FavoriteButton from "components/Button/FavoriteButton";
import DetailCard from "components/Card/DetailCard";
import ImageCard from "components/Card/ImageCard";
import Image from "components/Image/Image";
import LeafletMap from "components/Map/LeafletMap";

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

const Location: any = () => {
  const { name }: any = useParams();

  const { toggleFavorite, favorites }: any = useFavorites("favorites", []);

  const { isLoading, error, data: locationByName }: any = useQuery(
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
          <h2>
            {locationByName.name}
            <FavoriteButton
              onClick={() => toggleFavorite(locationByName.name)}
              isFavorite={favorites.includes(locationByName.name)}
            />
          </h2>
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

          <ImageCard>
            {locationByName.pic[0] ? (
              locationByName.pic.map((locationPic) => (
                <Image
                  key={locationPic.link}
                  locationName={name}
                  picName={locationPic.name}
                  src={locationPic.link}
                  alt={locationPic.name}
                />
              ))
            ) : (
              <p>
                Ups! Es sieht so aus, als wenn es für diese Location noch keine
                Bilder gibt. Du kannst aber gerne durch Klicken auf den orangen
                Button neue Bilder hinzufügen.
              </p>
            )}
            <AddImage key="addImage" locationName={name} alt="addImage" />
          </ImageCard>

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