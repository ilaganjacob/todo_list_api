import express from "express";
import Task from "../models/task";
const app = express();

// Get all tasks
app.get("/tasks", async (req, res) => {
  try {
    // This finds all documents in the tasks collection
    const tasks = await Task.find({});
    res.status(200).send(tasks); // send 200 code and also send the tasks
  } catch (error) {
    console.log("Error retrieving all the tasks", error);
    res.status(500).json({ error: "Failed to retrieve the tasks" });
  }
});

app.get("/task/:id", (req, res) => {});

app.post("/", (req, res) => {
  res;
});
