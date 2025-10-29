import express from "express";
import mongodb from "mongodb";
const app = express();

const MongoClient = mongodb.MongoClient;
const uri =
  "mongodb+srv://jacobcandoilagan:ixT60exMb7EGUrrt@jacob-cluster.j3bsxku.mongodb.net/?appName=jacob-cluster";

const client = new MongoClient(uri);

// Get all tasks
app.get("/", (req, res) => {
  try {
    const tasks = await;
  } catch (error) {
    console.log("Error retrieving all the tasks", error);
  }
});

app.get("/task/:id", (req, res) => {});

app.post("/", (req, res) => {
  res;
});
