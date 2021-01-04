import React from "react";
import { Marker, Popup } from "react-leaflet";
import PropTypes from "prop-types";

const LocationMarker = ({ location, error }) => {
  return (
    <>
      {location ? (
        <Marker
          position={[
            location.latitude.toString(),
            location.longitude.toString(),
          ]}
        >
          <Popup>Hier bist du</Popup>
        </Marker>
      ) : (
        <p>Loading...</p>
      )}
      {error && <p className="errorMessage">Location Error: {error}</p>}
    </>
  );
};

LocationMarker.propTypes = {
  location: PropTypes.object,
  error: PropTypes.string,
};

export default LocationMarker;
