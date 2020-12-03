export async function getLocationNamebyTour(tour) {
  const response = await fetch(`/api/locations/${tour}`);
  const list = await response.json();
  return list;
}
