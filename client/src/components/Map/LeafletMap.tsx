import { getLocationByName } from "api/locations";
import L from "leaflet";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import "mapbox-gl/dist/mapbox-gl.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import iconLight from "../../assets/icon_light.png";
import useCurrentLocation from "../../hooks/useCurrentLocation";
import { geolocationOptions } from "./geolocationOptions";
import LocationMarker from "./Userlocation";

const Map: any = styled(MapContainer)`
  height: 40vh;
  border-radius: 15px;
  margin-bottom: 2.5rem;
`;

const LeafletMap: any = () => {
  const theme = useTheme();
  const { location: currentLocation, error: currentError } =
    useCurrentLocation(geolocationOptions);

  const { name }: any = useParams();

  const {
    isLoading,
    error,
    data: locationByname,
  }: any = useQuery(name, getLocationByName);

  if (isLoading) {
    return "Laden...";
  }

  if (error) {
    return `Ein Fehler ist aufgetreten: ${error.message}`;
  }

  const DefaultIcon = L.icon({
    iconUrl: iconLight,
    shadowUrl: iconShadow,
  });

  L.Marker.prototype.options.icon = DefaultIcon;

  console.log(locationByname);

  return (
    <Map
      center={locationByname.position}
      zoom={"16"}
      scrollWheelZoom={"center"}
    >
      <Marker position={locationByname.position}>
        <Popup>
          {locationByname.name} <br />
          {locationByname.website}
        </Popup>
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
