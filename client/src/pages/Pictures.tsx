import React from "react";
import styled from "styled-components/macro";

import { getLocationByName } from "../api/locations";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import PictureContainer from "components/Image/PictureContainer";

const PicturesDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  max-width: 600px;
  text-align: center;
`;

const Pictures: any = () => {
  const name = useParams();
  const pictureName = name;

  const {
    isLoading,
    error,
    data: locationByName,
  } = useQuery(name, getLocationByName);

  if (isLoading) {
    return <p>Inhalt wird geladen</p>;
  }

  if (error) {
    return `Ein Fehler ist aufgetreten: ${error}`;
  }

  const filterByPicName = locationByName.pic;

  const picDetails = filterByPicName.filter((onePic) =>
    onePic.name.includes(pictureName)
  );

  return (
    <PicturesDiv>
      <h2>{picDetails[0].name}</h2>
      <PictureContainer>
        <img src={picDetails[0].link} alt={picDetails[0].name} />
      </PictureContainer>
      <p> {picDetails[0].description}</p>
    </PicturesDiv>
  );
};

export default Pictures;
