const { MongoClient } = require("mongodb");

let client;
let db;
async function connect(url, dbName) {
  client = await MongoClient.connect(url, {
    useUnifiedTopology: true,
  });
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
