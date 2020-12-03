const { collection } = require("./database");

async function getLocatioNamebyTour(tourName) {
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
exports.getLocatioNamebyTour = getLocatioNamebyTour;
