export async function getEveryLocation() {
  const response = await fetch(`/api/locations`);
  if (!response.ok) {
    const message = await response.text();
    throw new Error(message);
  }
  const locations = await response.json();
  return locations;
}
