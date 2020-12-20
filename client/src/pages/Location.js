import React from "react";
import styled from "styled-components/macro";
import PageHeadline from "../components/Header/PageHeadline";

import { /* Link, */ useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getLocationByName } from "../api/locations";
import DetailCard from "../components/Card/LocationDetails";
import useFavorites from "../hooks/useFavorites";
import FavoriteButton from "../components/Button/FavoriteButton";
import LeafletMap from "../components/Map/LeafletMap";
import Header from "../components/Header/Header";
import ImageCard from "../components/Card/ImageCard";
import Image from "../components/Image/Image";

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

  console.log(locationByName.pic);

  return (
    <LocationDiv>
      <Header />
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
            {locationByName.address.map((name) => (
              <p key={name}> {name} </p>
            ))}
            {locationByName.openingHours && (
              <p> {locationByName.openingHours}</p>
            )}

            {locationByName.website && (
              <p>
                <a href={locationByName.website}>zu Locationwebsite</a>
              </p>
            )}
          </DetailCard>

          {locationByName.pic && (
            // <ImageCard>
            //   {locationByName.pic.map((name) => (
            //     <div key={name.name}>
            //       <Link to={`/locations/${locationByName.name}/${name.name}`}>
            //         <img src={name.link} alt={name.name} />
            //       </Link>
            //     </div>
            //   ))}
            // </ImageCard>
            <ImageCard>
              {locationByName.pic.map((locationPic) => (
                <>
                  {console.log(locationPic.link)}
                  <Image
                    key={locationPic.name}
                    locationName={name}
                    picname={locationPic.name}
                    src={locationPic.link}
                    alt={locationPic.name}
                  />
                </>
              ))}
            </ImageCard>
          )}
          <LeafletMap
            zoomdistance="15"
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
