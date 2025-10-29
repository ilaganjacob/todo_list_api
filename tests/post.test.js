import request from "supertest";
import app from "../index";
describe("POST /tasks", () => {
  Test("Meta test", async () => {
    const data = { title: "meta test", complete: false };
    await request(app).post("/tasks").send(data);

    expect(res.statusCode).toBe(201);
    expect(res.body.status).toBe("ok");
  });
});
