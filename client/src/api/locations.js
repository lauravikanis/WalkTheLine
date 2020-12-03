export async function getListsByTour(tour) {
  const response = await fetch(`/api/locations/${tour}`);
  const list = await response.json();
  return list;
}
