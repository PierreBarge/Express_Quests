const request = require("supertest");
const app = require("../app");

describe("GET /api/movies", () => {
  it("should return all movies", async () => {
    const response = await request(app).get("/api/movies");
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.status).toEqual(200);
  });
});

describe("GET /api/movies/:id", () => {
  it("should return the movie with specified id", async () => {
    for (let i = 1; i <= 3; i++) {
      const response = await request(app).get(`/api/movies/${i}`);

      expect(response.headers["content-type"]).toMatch(/json/);
      expect(response.status).toEqual(200);
    }
  });
  it("should return a 404 response if specified id corresponds to no movie", async () => {
    const response = await request(app).get(`/api/movies/0`);
    expect(response.status).toEqual(404);
  });
});
