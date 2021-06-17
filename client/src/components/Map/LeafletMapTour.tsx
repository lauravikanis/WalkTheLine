import L from "leaflet";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import "mapbox-gl/dist/mapbox-gl.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { getTourDetails } from "../../api/locations";
import iconLight from "../../assets/icon_light.png";
import useCurrentLocation from "../../hooks/useCurrentLocation";
import { geolocationOptions } from "./geolocationOptions";
import LocationMarker from "./Userlocation";

const Map: any = styled(MapContainer)`
  height: 40vh;
  border-radius: 15px;
  margin-bottom: 2.5rem;
`;

const PopupContainer = styled.div`
  font-size: 1rem;
  font-family: var(--titleFont);
  font-weight: bold;

  hr {
    border: 0.5px solid var(--text-color);
    margin: 1.5px 0;
  }
  div {
    font-size: 0.75rem;
    font-family: "Roboto", sans-serif;
  }
`;

const LeafletMapTour: any = () => {
  let location = useLocation();
  const theme = useTheme();

  const { location: currentLocation, error: currentError } =
    useCurrentLocation(geolocationOptions);

  const {
    isLoading,
    error,
    data: TourDetails,
  } = useQuery(location.pathname, getTourDetails);

  if (isLoading) {
    return "Loading...";
  }
  if (error) {
    return `An error has occurred: ${error}`;
  }

  const DefaultIcon = L.icon({
    iconUrl: iconLight,
    shadowUrl: iconShadow,
  });

  L.Marker.prototype.options.icon = DefaultIcon;

  return (
    <Map center={[50.9375, 6.9603]} zoom={13} scrollWheelZoom={"center"}>
      {TourDetails.locationNames.map((locationName) => (
        <Marker key={locationName.name} position={locationName.position}>
          <Popup>
            <PopupContainer>
              {locationName.name}
              <hr />
              {locationName.address.map((locationAddress) => (
                <div key={locationAddress}> {locationAddress} </div>
              ))}
            </PopupContainer>
          </Popup>
        </Marker>
      ))}
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
export default LeafletMapTour;
