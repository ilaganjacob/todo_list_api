import request from "supertest";
import mongoose from "mongoose";
import app from "../index.js";
describe("POST /tasks", () => {
  // Close database connection after all tests
  afterAll(async () => {
    await mongoose.connection.close();
  });

  test("Meta test", async () => {
    const data = { title: "meta test", complete: false };

    const res = await request(app).post("/tasks").send(data);

    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe("meta test");
    expect(res.body.complete).toBe(false);
  });
});
