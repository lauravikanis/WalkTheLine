import React from "react";
import { MapContainer, TileLayer, Popup } from "react-leaflet";
import styled from "styled-components";
import "leaflet/dist/leaflet.css";
import Marker from "react-leaflet-enhanced-marker";
import markerpath from "../../assets/marker.svg";

const Map = styled(MapContainer)`
  height: 300px;
`;

const LeafletMap = () => {
  return (
    <Map center={[50.9375, 6.9603]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker icon={markerpath} position={[50.9375, 6.9603]}>
        <Popup>Das ist deine Location</Popup>
      </Marker>
    </Map>
  );
};
export default LeafletMap;
