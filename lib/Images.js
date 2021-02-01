// const { cloudinary } = require("./cloudinary");
const { collection } = require("./database");

async function getImageDataOfLocation(locationName) {
  const locationImages = await collection("walktheline")
    .find({
      name: locationName,
    })
    .map((location) => {
      return {
        Images: location.pic,
      };
    })
    .toArray();
  if (!locationImages) {
    console.log("Error - Das gibts nicht");
    return null;
  }
  const formattedImageDetails = {
    name: locationImages.name,
    description: locationImages.description,
    link: locationImages.link,
  };
  return formattedImageDetails;
}

async function setImageDataOfLocation(
  locationName,
  imageName,
  description,
  image
) {
  const UploadImage = await collection("pictures").InsertOne(
    { location: locationName },
    { name: imageName },
    { description: description },
    { image: image }
  );

  return UploadImage;
}

exports.getImageDataOfLocation = getImageDataOfLocation;
exports.setImageDataOfLocation = setImageDataOfLocation;
