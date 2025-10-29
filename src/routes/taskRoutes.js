import express from "express";
import Task from "../models/task.js";

const router = express.Router();

// Get all tasks
router.get("/", async (req, res) => {
  try {
    // This finds all documents in the tasks collection
    const tasks = await Task.find({});
    res.status(200).send(tasks); // send 200 code and also send the tasks
  } catch (error) {
    console.log("Error retrieving all the tasks", error);
    res.status(500).json({ error: "Failed to retrieve the tasks" });
  }
});

router.get("/:id", (req, res) => {});

router.post("/", (req, res) => {
  res;
});

export default router;
