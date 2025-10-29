import mongodb from "mongodb";
import express from "express";
import "dotenv/config";
const app = express();
const port = 3000;

const MongoClient = mongodb.MongoClient;

const dbConnection = async function (req, res, next) {
  const client = new MongoClient(process.env.uri);

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
