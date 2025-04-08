const request = require("supertest");
const app = require("../app");

describe("Test authentication features", () => {
  it("POST /register", async () => {
    const res = await request(app).post("/register").send({
      email: "johndoe@email.com",
      password: "secret",
    });
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("user");
    expect(res.body.message).toBe("User created");
  });
});
