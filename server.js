const express = require("express");

const path = require("path");

const { getLocation } = require("./lib/locations");
const { connect } = require("./lib/database");

const app = express();
const port = process.env.PORT || 3001;

// Serve any static files
app.use(express.static(path.join(__dirname, "client/build")));
app.use(
  "/storybook",
  express.static(path.join(__dirname, "client/storybook-static"))
);

app.get("/walktheline/:name", async (req, res) => {
  const { name } = req.params;
  try {
    const locationValue = await getLocation(name);

    if (!locationValue) {
      res.status(404).send("could not find the passwords you are looking for");
      return;
    }
    res.send(locationValue);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server error");
  }
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

// Handle React routing, return all requests to React app
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client/build", "index.html"));
// });

async function run() {
  console.log("Connecting to database...");
  await connect(process.env.MONGO_DB_URI, process.env.MONGO_DB_NAME);
  console.log("Connected to database 🎉");

  app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });
}

run();
