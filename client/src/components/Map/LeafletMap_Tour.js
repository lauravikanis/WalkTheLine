import React from "react";
import { MapContainer, Popup, TileLayer /* Popup */ } from "react-leaflet";
import styled from "styled-components";
import "leaflet/dist/leaflet.css";
import Marker from "react-leaflet-enhanced-marker";
import { ReactComponent as MarkerIcon } from "../../assets/marker.svg";

import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { getTourDetails } from "../../api/locations";

const Map = styled(MapContainer)`
  height: 300px;
  border-radius: 15px;
`;

const LeafletMap = () => {
  let location = useLocation();

  const { isLoading, error, data: TourDetails } = useQuery(
    location.pathname,
    getTourDetails
  );

  if (isLoading) {
    return "Loading...";
  }
  if (error) {
    return `An error has occurred: ${error.message}`;
  }
  console.log(TourDetails.locationNames[1].position);

  return (
    <Map center={["50.9375", "6.9603"]} zoom={11} scrollWheelZoom={false}>
      {TourDetails.locationNames.map((locationName) => (
        <Marker
          key={locationName.name}
          position={locationName.position}
          icon={<MarkerIcon />}
        >
          <Popup>Das ist deine Location</Popup>
        </Marker>
      ))}
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
  markerPosition: PropTypes.array,
};
