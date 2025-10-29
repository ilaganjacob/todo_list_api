import express from "express";
const app = express();

// Get all tasks
app.get("/tasks", (req, res) => {
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
