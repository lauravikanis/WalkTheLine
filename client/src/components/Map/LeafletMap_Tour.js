import React from "react";
import { MapContainer, Popup, TileLayer, Marker } from "react-leaflet";
import styled from "styled-components";
import "leaflet/dist/leaflet.css";

import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { getTourDetails } from "../../api/locations";

import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const Map = styled(MapContainer)`
  height: 40vh;
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
  let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
  });
  L.Marker.prototype.options.icon = DefaultIcon;

  return (
    <Map center={["50.9375", "6.9603"]} zoom={13} scrollWheelZoom={"center"}>
      {TourDetails.locationNames.map((locationName) => (
        <Marker key={locationName.name} position={locationName.position}>
          <Popup>{locationName.name}</Popup>
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
