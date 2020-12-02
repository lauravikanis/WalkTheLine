export const getLocation = async (locationName) => {
  const response = await fetch(`/walktheline/name:"${locationName}"`);
  if (!response.ok) {
    const message = await response.text();
    throw new Error(message);
  }
  const password = await response.text();
  return password;
};
