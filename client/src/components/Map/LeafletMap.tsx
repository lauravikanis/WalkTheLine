import React from "react";
import { Popup, TileLayer, Marker } from "react-leaflet";
import styled, { useTheme } from "styled-components";
import "leaflet/dist/leaflet.css";
import "mapbox-gl/dist/mapbox-gl.css";

import L from "leaflet";

import iconShadow from "leaflet/dist/images/marker-shadow.png";
import useCurrentLocation from "../../hooks/useCurrentLocation";
import LocationMarker from "./Userlocation";
import { geolocationOptions } from "./geolocationOptions";
import iconLight from "../../assets/icon_light.png";

const Map: React.ElementType = styled(MapContainer)`
  height: 40vh;
  border-radius: 15px;
  margin-bottom: 1.5rem;
`;

const LeafletMap = (
  zoomdistance: any,
  mapCenter: any,
  markerPosition: any,
  locationName: any
) => {
  const theme = useTheme();

  const { location: currentLocation, error: currentError } = useCurrentLocation(
    geolocationOptions
  );

  const DefaultIcon = L.icon({
    iconUrl: iconLight,
    shadowUrl: iconShadow,
  });
  L.Marker.prototype.options.icon = DefaultIcon;

  return (
    <Map center={mapCenter} zoom={zoomdistance} scrollWheelZoom={"center"}>
      <Marker position={markerPosition}>
        <Popup>{locationName}</Popup>
      </Marker>
      {currentLocation && (
        <LocationMarker location={currentLocation} error={currentError} />
      )}

      {theme === "light" ? (
        <TileLayer
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>
        '
          url={`https://api.mapbox.com/styles/v1/lauravikanis/ckjbesrwvj9681at4kry1zw4s/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
      ) : (
        <TileLayer
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>
        '
          url={`https://api.mapbox.com/styles/v1/lauravikanis/ckkh41jns0pi418o2tvm7vkz1/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
      )}
    </Map>
  );
};
export default LeafletMap;
