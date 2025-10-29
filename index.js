import express from "express";
import { connectDB } from "./src/config/database.js";
import "dotenv/config";

await connectDB();
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Works!");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
