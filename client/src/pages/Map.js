import React from "react";
import styled from "styled-components/macro";

import PageHeadline from "../components/Header/PageHeadline";
import LeafletMap from "../components/Map/LeafletMap";

const MapDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
`;

const MapPage = () => {
  return (
    <MapDiv>
      <PageHeadline>Map</PageHeadline>
      <LeafletMap />
    </MapDiv>
  );
};

export default MapPage;
