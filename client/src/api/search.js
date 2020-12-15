export async function getEveryLocation() {
  const response = await fetch(`/api/search`);
  if (!response.ok) {
    const message = await response.text();
    throw new Error(message);
  }
  const SearchOutput = await response.json();
  return SearchOutput;
}
