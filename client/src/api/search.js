export async function getEveryLocation(searchInput) {
  const response = await fetch(`/api/search?name=${searchInput}`);
  if (!response.ok) {
    const message = await response.text();
    throw new Error(message);
  }
  const SearchOutput = await response.json();
  return SearchOutput;
}
