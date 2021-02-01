const { collection } = require("./database");

async function getLocationByName(locationName) {
  const locationByName = await collection("walktheline").findOne({
    name: locationName,
  });
  if (!locationByName) {
    console.log("Error - Das gibts nicht");
    return null;
  }
  return locationByName;
}

async function getTourDetails(tourName) {
  const tourDetails = await collection("tour").findOne({ name: tourName });
  const locationNames = await collection("walktheline")
    .find({ tour: tourName })
    .map((location) => {
      return {
        name: location.name,
        position: location.position,
        address: location.address,
      };
    })
    .toArray();
  if (!tourDetails || !locationNames) {
    console.log("Error - Das gibts nicht");
    return null;
  }
  const formattedTourDetails = {
    name: tourDetails.name,
    description: tourDetails.description,
    playlist: tourDetails.playlist,
    locationNames: locationNames,
  };
  return formattedTourDetails;
}

exports.getTourDetails = getTourDetails;
exports.getLocationByName = getLocationByName;
