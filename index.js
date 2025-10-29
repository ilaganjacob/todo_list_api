import express from "express";
import { connectDB } from "./src/config/database.js";
import "dotenv/config";
import taskRoutes from "./src/routes/taskRoutes.js";

await connectDB();
const app = express();
const port = 3000;

// Enable express to parse json
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Works!");
});

app.use("/tasks", taskRoutes); // delegate any routes beginning with '/tasks' to taskRoutes

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
