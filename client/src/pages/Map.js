import React from "react";
import styled from "styled-components/macro";
import mappath from "../assets/map.svg";

import PageHeadline from "../components/Header/PageHeadline";
import PictureContainer from "../components/Image/Picture";

const MapDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  max-width: 600px;
`;

const Map = () => {
  return (
    <MapDiv>
      <PageHeadline>Map</PageHeadline>
      <PictureContainer>
        <img src={mappath} alt="placeholder" />
      </PictureContainer>
    </MapDiv>
  );
};

export default Map;
