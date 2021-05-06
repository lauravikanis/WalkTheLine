import LeafletMap from "components/Map/LeafletMap";
import React from "react";
import styled from "styled-components/macro";

const MapDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
`;

const MapPage: any = () => {
  return (
    <MapDiv>
      <h2>Map</h2>
      <LeafletMap />
    </MapDiv>
  );
};

export default MapPage;
