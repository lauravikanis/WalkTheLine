export async function getLocation() {
  const response = await fetch("http://localhost:2601/locations");
  const lists = await response.json();
  return lists;
}

export async function getListsByTour(name) {
  const response = await fetch(`http://localhost:2601/api/locations/${name}`);
  const list = await response.json();
  return list;
}
