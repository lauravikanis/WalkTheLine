import React from "react";
import { MapContainer, Popup, TileLayer, Marker } from "react-leaflet";
import styled from "styled-components";
import "leaflet/dist/leaflet.css";
import "mapbox-gl/dist/mapbox-gl.css";

import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { getTourDetails } from "../../api/locations";

import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

// const Mapboxtoken = process.env.REACT_APP_MAPBOX_TOKEN;

const Map = styled(MapContainer)`
  height: 40vh;
  border-radius: 15px;
`;

const LeafletMapTour = () => {
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
        attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>
        '
        url={`https://api.mapbox.com/styles/v1/lauravikanis/ckjbesrwvj9681at4kry1zw4s/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
      />
    </Map>
  );
};
export default LeafletMapTour;
LeafletMapTour.propTypes = {
  zoomdistance: PropTypes.string,
  markerPosition: PropTypes.array,
};
