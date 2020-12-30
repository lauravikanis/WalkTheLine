import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import styled from "styled-components";
import "leaflet/dist/leaflet.css";
import "mapbox-gl/dist/mapbox-gl.css";

import PropTypes from "prop-types";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const Map = styled(MapContainer)`
  height: 40vh;
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
        attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>
        '
        url={`https://api.mapbox.com/styles/v1/lauravikanis/ckjbesrwvj9681at4kry1zw4s/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
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
