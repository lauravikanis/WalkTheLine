// const { cloudinary } = require("./cloudinary");
const { collection } = require("./database");

async function getImageDataOfLocation(locationName) {
  const locationImages = await collection("pictures")
    .find({
      location: locationName,
    })
    .map((Image) => {
      return {
        name: Image.imageName,
        description: Image.description,
        image: Image.image,
      };
    })
    .toArray();
  if (!locationImages) {
    console.log("Error - Das gibts nicht");
    return null;
  }

  return locationImages;
}

exports.getImageDataOfLocation = getImageDataOfLocation;
