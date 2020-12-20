import React from "react";
import styled from "styled-components/macro";

import PageHeadline from "../components/Header/PageHeadline";
import PictureContainer from "../components/Image/Picture";
import Header from "../components/Header/Header";
import { getLocationByName } from "../api/locations";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

const PicturesDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  max-width: 600px;
`;

const Pictures = () => {
  const locationName = useParams();
  const pictureName = locationName.pic;

  const { isLoading, error, data: locationByName } = useQuery(
    locationName.name,
    getLocationByName
  );
  if (isLoading) {
    return "Laden...";
  }

  if (error) {
    return `Ein Fehler ist aufgetreten: ${error.message}`;
  }

  const filterByPicName = locationByName.pic;

  const picDetails = filterByPicName.filter((onePic) =>
    onePic.name.includes(pictureName)
  );

  return (
    <PicturesDiv>
      <Header />
      <PageHeadline>{picDetails[0].name}</PageHeadline>
      <PictureContainer>
        <img src={picDetails[0].link} alt="placeholder" />
      </PictureContainer>
      <p> {picDetails[0].description}</p>
    </PicturesDiv>
  );
};

export default Pictures;
