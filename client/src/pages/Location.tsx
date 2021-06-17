import Button from "components/Button/Button";
import DetailCard from "components/Card/DetailCard";
import ImageCard from "components/Card/ImageCard";
import LeafletMap from "components/Map/LeafletMap";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components/macro";
import { getLocationByName } from "../api/locations";
import AddImage from "../components/Image/ImageAdd";
import useFavorites from "../hooks/useFavorites";

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

const ImageLink = styled(Link)`
  object-fit: scale-down;

  img {
    width: 6rem;
    height: 6rem;
    margin: 5px;
    border-radius: 15px;
    object-fit: cover;
  }
`;
const Location: any = () => {
  const { name }: any = useParams();

  const { toggleFavorite, favorites }: any = useFavorites("favorites", []);

  const {
    isLoading,
    error,
    data: locationByName,
  }: any = useQuery(name, getLocationByName);

  if (isLoading) {
    return <p>Laden...</p>;
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
            <Button
              onClick={() => toggleFavorite(locationByName.name)}
              isFavorite={favorites.includes(locationByName.name)}
              favorite
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
              locationByName.pic.map((locationPic: any) => (
                <ImageLink
                  to={`/location/${name}/${locationPic.name}`}
                  key={locationPic.link}
                >
                  <img src={locationPic.link} alt={locationPic.name} />
                </ImageLink>
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

          <LeafletMap locationName={name} />
        </>
      )}
    </LocationDiv>
  );
};
export default Location;
