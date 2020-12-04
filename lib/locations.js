const { collection } = require("./database");

async function getLocationNamebyTour(tourName) {
  const locationNamebyTour = await collection("walktheline")
    .find({ tour: tourName })
    .map((location) => location.name)
    .toArray();
  if (!locationNamebyTour) {
    console.log("Error - Das gibts nicht");
    return null;
  }

  return locationNamebyTour;
}

async function getLocationByName(locationName) {
  const locationByName = await collection("walktheline").findOne({
    name: locationName,
  });
  if (!locationByName) {
    console.log("Error - Das gibts nicht");
    return null;
  }
  console.log(locationByName);

  return locationByName;
}

exports.getLocationByName = getLocationByName;
exports.getLocationNamebyTour = getLocationNamebyTour;
