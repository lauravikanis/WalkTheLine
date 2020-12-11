import React, { Fragment } from "react";
import { ReactComponent as MarkerIcon } from "../../assets/marker.svg";
import MarkerPopup from "./MarkerPopup.js";
import { useQuery } from "react-query";
import { getLocationByName } from "../../api/locations";
import Marker from "react-leaflet-enhanced-marker";

const VenueMarkers = (name) => {
  const { isLoading, error, data: locationByName } = useQuery(
    name,
    getLocationByName
  );
  if (isLoading) {
    return "Loading...";
  }

  if (error) {
    return `An error has occurred: ${error.message}`;
  }
  console.log(locationByName.to);
  const markers = locationByName.map((venue, index) => (
    <Marker
      key={index}
      position={locationByName.position}
      icon={<MarkerIcon />}
    >
      <MarkerPopup data={locationByName.adress} />
    </Marker>
  ));

  return <Fragment>{markers}</Fragment>;
};

export default VenueMarkers;
