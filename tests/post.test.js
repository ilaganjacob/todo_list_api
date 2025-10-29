import request from "supertest";
import app from "../index";
describe("POST /tasks", () => {
  test("Meta test", async () => {
    const data = { title: "meta test", complete: false };

    const res = await request(app).post("/tasks").send(data);

    expect(res.statusCode).toBe(201);
    expect(res.title).toBe("meta test");
    expect(res.complete).toBe(false);
  });
});
