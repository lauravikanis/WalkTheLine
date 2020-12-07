export async function getLocationByName(name) {
  const response = await fetch(`/api/locations/name/${name}`);
  if (!response.ok) {
    const message = await response.text();
    throw new Error(message);
  }
  const LocationDetails = await response.json();
  return LocationDetails;
}

export async function getTourDetails() {
  const response = await fetch(`/api/tour/electronic`);
  if (!response.ok) {
    const message = await response.text();
    throw new Error(message);
  }
  const TourDetails = await response.json();
  return TourDetails;
}
