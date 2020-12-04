export async function getLocationNamebyTour() {
  const response = await fetch(`/api/locations/electronic`);

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message);
  }

  const LocationNameList = await response.json();

  return LocationNameList;
}
