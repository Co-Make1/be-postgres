const supertest = require("supertest")
const server = require("./server")
const db = require("../data/db-config")


beforeEach(async () => {
    await db.seed.run
})
test("Test Route", async () => {
    const res = await supertest(server).get("/")
    expect(res.status).toBe(200)
    expect(res.type).toBe("text/html");
    expect(res.text).toBe("<h3>Co-make API is live!</h3>")
    })