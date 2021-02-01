const { cloudinary } = require("./cloudinary");
const { collection } = require("./database");

async function getImageDataOfLocation(locationName) {
  const ImagesByLocation = await collection("walktheline").findOne({
    name: locationName,
  });
  if (!ImagesByLocation) {
    console.log("Error - Das gibts nicht");
    return null;
  }

  return ImagesByLocation;
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
