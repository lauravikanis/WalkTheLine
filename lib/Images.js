const { cloudinary } = require("./cloudinary");
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
  const uploadedResponse = await cloudinary.uploader.upload(image, {
    upload_preset: "WalkTheLine",
  });

  const cloudImage = {
    link: uploadedResponse.secure_url,
    name: imageName,
    description: description,
  };

  return await collection("walktheline").updateOne(
    { name: locationName },
    { $push: { pic: cloudImage } }
  );
}

exports.getImageDataOfLocation = getImageDataOfLocation;
exports.setImageDataOfLocation = setImageDataOfLocation;
