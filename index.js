import mongodb from "mongodb";
import express from "express";

const app = express();
const port = 3000;

const MongoClient = mongodb.MongoClient;
const uri =
  "mongodb+srv://jacobcandoilagan:ixT60exMb7EGUrrt@jacob-cluster.j3bsxku.mongodb.net/?appName=jacob-cluster";

const client = new MongoClient(uri);

client.connect((err) => {
  const collection = client.db("todo_list_api").collection("tasks");
  // Perform any actions here
  console.log("Connected to DB");
  collection.insertOne({ content: "hi" });

  collection.findOne({ content: "hi" });
  client.close();
});

app.get("/", (req, res) => {
  res.send("Works!");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
