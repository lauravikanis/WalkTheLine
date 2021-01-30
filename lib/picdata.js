const { cloudinary } = require("./cloudinary");
const { collection } = require("./database");

async function getImageDataOfLocation(locationName) {
  const imgEntry = await collection("pictures").findOne({
    locationName: locationName,
  });
  if (!imgEntry) {
    return null;
  }
  return imgEntry;
}

async function setImage(image, locationName) {
  const uploadedResponse = await cloudinary.uploader.upload(image, {
    upload_preset: "WalkTheLine",
  });
  const imageObj = {
    url: uploadedResponse.secure_url,
    imgNr: uploadedResponse.asset_id,
    timeStamp: uploadedResponse.created_at,
  };
  return await collection("pictures").updateOne(
    { locationName: locationName },
    { $push: { images: imageObj } }
  );
}

exports.getImageDataOfLocation = getImageDataOfLocation;

exports.setImage = setImage;
