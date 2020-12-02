const { MongoClient } = require("mongodb");

let client;
let db;
async function connect(url, dbName) {
  client = await MongoClient.commect(url, { useUnfiedTopology: true });
  db = client.db(dbName);
}

function close() {
  return client.close();
}

function collection(name) {
  return db.collection(name);
}

exports.connect = connect;
exports.close = close;
exports.collection = collection;
