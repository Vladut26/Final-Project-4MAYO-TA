const { spec, request } = require("pactum");
const { faker } = require("@faker-js/faker");
const base_URL = "https://practice.expandtesting.com/notes/api/";

describe("Register user test suite", () => {
  before(() => {
    request.setDefaultTimeout(5000);
  });
  it("Register user test", async () => {
    const requestBody = {
      name: faker.person.firstName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
    await spec()
      .post(base_URL + "users/register")
      .expectStatus(201)
      .withHeaders("content-type", "application/json")
      .expectResponseTime(3000)
      .withBody(requestBody)
      .expectBodyContains("User account created successfully");
  });

  it("Register user invalid scenario test", async () => {
    const requestBodyInvalid = {
      name: "Jn",
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
    await spec()
      .post(base_URL + "users/register")
      .expectStatus(400)
      .withHeaders("content-type", "application/json")
      .expectResponseTime(3000)
      .withBody(requestBodyInvalid)
      .expectBodyContains("User name must be between 4 and 30 characters");
  });
});
