import React from "react";
import { MapContainer, TileLayer /* Popup */ } from "react-leaflet";
import styled from "styled-components";
import "leaflet/dist/leaflet.css";
// import { ReactComponent as MarkerIcon } from "../../assets/marker.svg";
// import Marker from "react-leaflet-enhanced-marker";
import Markers from "./VenueMarkers";

import PropTypes from "prop-types";

const Map = styled(MapContainer)`
  height: 300px;
  border-radius: 15px;
`;

const LeafletMap = ({ zoomdistance, mapCenter /* markerPosition */ }) => {
  return (
    <Map center={mapCenter} zoom={zoomdistance} scrollWheelZoom={false}>
      <Markers
      /* icon={<MarkerIcon />} position={markerPosition} */
      >
        {/*  <Popup>Das ist deine Location</Popup> */}
      </Markers>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </Map>
  );
};
export default LeafletMap;
LeafletMap.propTypes = {
  zoomdistance: PropTypes.string,
  mapCenter: PropTypes.array,
  markerPosition: PropTypes.array,
};
