export async function getImageDataOfLocation(name) {
  const response = await fetch(`/api/locationImages?name=${name}`);
  if (!response.ok) {
    const message = await response.text();
    throw new Error(message);
  }
  const LocationDetails = await response.json();
  return LocationDetails;
}
