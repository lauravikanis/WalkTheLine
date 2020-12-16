const { collection } = require("./database");

async function getEveryLocation() {
  const everyLocation = await collection("walktheline").find({}).toArray();
  if (!everyLocation) {
    console.log("Error - Das gibts nicht");
    return null;
  }

  return everyLocation;
}

exports.getEveryLocation = getEveryLocation;
