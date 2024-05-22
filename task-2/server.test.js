const request = require("supertest");
const app = require("./server");

describe("GET /count", () => {
    test("should return current count", async () => {
        const res = await request(app).get("/count");
        expect(res.statusCode).toEqual(200);
        expect(res.body.count).toEqual(0);
    });
});

describe("POST /increment", () => {
    test("should increment count by value provided in the body", async () => {
        const res = await request(app).post("/increment").send({ value: 5 });
        expect(res.statusCode).toEqual(200);
        expect(res.body.count).toEqual(5);
    });

    test("should return error for invalid body", async () => {
        const res = await request(app).post("/increment").send({ value: "five" });
        expect(res.statusCode).toEqual(400);
        expect(res.body.error).toEqual("Invalid value");
    });
});

afterAll((done) => {
    app.close(done);
});
