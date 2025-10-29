import mongodb from "mongodb";
import express from "express";

const app = express();
const port = 3000;

const MongoClient = mongodb.MongoClient;
const uri =
  "mongodb+srv://jacobcandoilagan:ixT60exMb7EGUrrt@jacob-cluster.j3bsxku.mongodb.net/?appName=jacob-cluster";

const client = new MongoClient(uri);

const dbConnection = async function (req, res, next) {
  try {
    await client.connect();
    console.log("Connected to db!");
    next();
  } catch (err) {
    console.log("Error connecting to database:", err);
  }
};

app.use(dbConnection);

app.get("/", (req, res) => {
  res.send("Works!");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
