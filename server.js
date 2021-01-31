require("dotenv").config();

const express = require("express");
const path = require("path");
const { connect } = require("./lib/database");
const { getImageDataOfLocation } = require("./lib/images");

const { getLocationByName, getTourDetails } = require("./lib/locations");
const { getEveryLocation } = require("./lib/search");

const app = express();
const port = process.env.PORT || 2601;

// Serve any static files
app.use(express.static(path.join(__dirname, "client/build")));
app.use(
  "/storybook",
  express.static(path.join(__dirname, "client/storybook-static"))
);

app.get("/api/location", async (req, res) => {
  const { name } = req.query;
  try {
    const locationValue = await getLocationByName(name);
    if (!locationValue) {
      res.status(404).send("could not find the content you are looking for");
      return;
    }
    res.send(locationValue);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server error");
  }
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.get("/api/locations", async (req, res) => {
  try {
    const locationValue = await getEveryLocation();
    if (!locationValue) {
      res.status(404).send("could not find the content you are looking for");
      return;
    }
    res.send(locationValue);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server error");
  }
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.get("/api/tour/:tour", async (req, res) => {
  const { tour } = req.params;
  try {
    const tourValue = await getTourDetails(tour);
    if (!tourValue) {
      res.status(404).send("could not find the content you are looking for");
      return;
    }
    res.send(tourValue);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server error");
  }
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.get("/api/locationImages/:location", async (req, res) => {
  const { name } = req.query;
  try {
    const locationValue = await getImageDataOfLocation(name);
    if (!locationValue) {
      res.status(404).send("could not find the content you are looking for");
      return;
    }
    res.send(locationValue);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server error");
  }
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

async function run() {
  console.log("Connecting to database...");
  await connect(process.env.MONGO_DB_URI, process.env.MONGO_DB_NAME);
  console.log("Connected to database 🎉");
}

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

run();
