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

// async function setImageDataOfLocation(
//   locationName,
//   imageName,
//   description,
//   image
// ) {
//   const UploadImage = await collection("pictures").InsertOne(
//     { location: locationName },
//     { name: imageName },
//     { description: description },
//     { image: image }
//   );

//   return UploadImage;
// }

exports.getImageDataOfLocation = getImageDataOfLocation;
// exports.setImageDataOfLocation = setImageDataOfLocation;
