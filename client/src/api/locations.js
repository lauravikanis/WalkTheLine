export async function getLocationNamebyTour(tour) {
  const response = await fetch(`/api/locations/${tour}`);

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message);
  }
  console.log({ getLocationNamebyTour });

  const LocationNameList = await response.json();

  return LocationNameList;
}
