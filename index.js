import mongodb from "mongodb";
import express from "express";

const app = express();
const port = 3000;

const MongoClient = mongodb.MongoClient;
const uri =
  "mongodb+srv://jacobcandoilagan:ixT60exMb7EGUrrt@jacob-cluster.j3bsxku.mongodb.net/?appName=jacob-cluster";

const client = new MongoClient(uri);

async function getStarted() {
  try {
    const database = client.db("todo_list_api");
    const collection = database.collection("tasks");

    const query = { title: "coding" };
    const task = await collection.findOne(query);

    console.log(task);
  } catch (err) {
    console.log("error:", err);
  } finally {
    client.close();
  }
}
getStarted();

app.get("/", (req, res) => {
  res.send("Works!");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
