import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import styled from "styled-components";
import "leaflet/dist/leaflet.css";

// import Marker from "react-leaflet-enhanced-marker";
import PropTypes from "prop-types";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const Map = styled(MapContainer)`
  height: 300px;
  border-radius: 15px;
`;

const LeafletMap = ({
  zoomdistance,
  mapCenter,
  markerPosition,
  locationName,
}) => {
  let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
  });
  L.Marker.prototype.options.icon = DefaultIcon;

  return (
    <Map center={mapCenter} zoom={zoomdistance} scrollWheelZoom={"center"}>
      <Marker position={markerPosition}>
        <Popup>{locationName}</Popup>
      </Marker>

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
  locationName: PropTypes.string,
  mapCenter: PropTypes.array,
  markerPosition: PropTypes.array,
};
