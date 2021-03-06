import { useState, useEffect } from "react";

const useCurrentLocation: any = (options = {}) => {
  // store location in state
  const [location, setLocation]: any = useState();
  // store error message in state
  const [error, setError]: any = useState();

  // Success handler for geolocation's `getCurrentPosition` method
  const handleSuccess = (position) => {
    // const { latitude, longitude } = position.coords;

    const latitude: string = position.cords[0];
    const longitude: string = position.cords[1];

    setLocation({
      latitude,
      longitude,
    });
  };

  // Error handler for geolocation's `getCurrentPosition` method
  const handleError = (error) => {
    setError(error.message);
  };

  useEffect(() => {
    const { geolocation } = navigator;

    // If the geolocation is not defined in the used browser we handle it as an error
    if (!geolocation) {
      setError("Geolocation is not supported.");
      return;
    }

    // Call Geolocation API
    geolocation.getCurrentPosition(handleSuccess, handleError, options);
  }, [options]);

  return { location, error };
};

export default useCurrentLocation;
