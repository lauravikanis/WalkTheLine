export async function getLocationNamebyTour() {
  const response = await fetch(`/api/locations/electronic`);

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message);
  }

  const LocationNameList = await response.json();

  return LocationNameList;
}

export async function getLocationByName(name) {
  const response = await fetch(`/api/locations/name/${name}`);

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message);
  }

  const LocationDetails = await response.json();

  return LocationDetails;
}
