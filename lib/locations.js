const { collection } = require("./database");
const { cloudinary } = require("./cloudinary");

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

async function setImage(image, locationName, name, description) {
  const uploadedResponse = await cloudinary.uploader.upload(image, {
    upload_preset: "WalktheLine",
  });
  const imageObj = {
    link: uploadedResponse.secure_url,
    name: name,
    description: description,
  };
  console.log("succefully uploaded picture:", name, description, "to database");
  return await collection("walktheline").updateOne(
    { name: locationName },
    { $push: { pic: imageObj } }
  );
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
    console.log("There are no entries for ", tourDetails, locationNames);
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
exports.setImage = setImage;
exports.getTourDetails = getTourDetails;
exports.getLocationByName = getLocationByName;
