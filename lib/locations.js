const { collection } = require("./database");

async function getLocation(LocationName) {
  const locationDoc = await collection("walktheline").findOne({
    name: LocationName,
  });
  if (!locationDoc) {
    console.log("Error - Das gibts nicht");
    return null;
  }

  return LocationName.toString();
}
exports.getLocation = getLocation;
