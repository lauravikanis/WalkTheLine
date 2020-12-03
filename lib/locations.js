const { collection } = require("./database");

async function getLocation(tourName) {
  const locationDoc = await collection("walktheline")
    .find({ tour: tourName })
    .map((location) => location.name)
    .toArray();
  if (!locationDoc) {
    console.log("Error - Das gibts nicht");
    return null;
  }

  return locationDoc;
}
exports.getLocation = getLocation;
