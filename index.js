import mongodb from "mongodb";
import express from "express";
require("dotenv").config();
const app = express();
const port = 3000;

const MongoClient = mongodb.MongoClient;

const client = new MongoClient(uri);

const dbConnection = async function (req, res, next) {
  const uri = process.env.uri;
  const client = new MongoClient(uri);

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
