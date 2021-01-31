// const { cloudinary } = require("./cloudinary");
const { collection } = require("./database");

async function getImageDataOfLocation(locationName) {
  const locationImages = await collection("pictures").findOne({
    location: locationName,
  });
  if (!locationImages) {
    console.log("Error - Das gibts nicht");
    return null;
  }

  return locationImages;
}

exports.getImageDataOfLocation = getImageDataOfLocation;
