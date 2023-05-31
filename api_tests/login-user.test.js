const { spec, request } = require("pactum");
const { faker } = require("@faker-js/faker");
const base_URL = "https://practice.expandtesting.com/notes/api/";

describe("Login user test suite", () => {
  before(() => {
    request.setDefaultTimeout(5000);
  });
  const name = faker.person.firstName();
  const email = faker.internet.email();
  const psw = faker.internet.password();

  it("Register user test", async () => {
    const requestBody = {
      name: name,
      email: email,
      password: psw,
    };
    await spec()
      .post(base_URL + "users/register")
      .expectStatus(201)
      .withHeaders("content-type", "application/json")
      .expectResponseTime(3000)
      .withBody(requestBody)
      .expectBodyContains("User account created successfully");
  });
  let token = "";
  it("Login user test", async () => {
    const requestBody = {
      email: email,
      password: psw,
    };
    const resp = await spec()
      .post(base_URL + "users/login")
      .expectStatus(200)
      .withHeaders("content-type", "application/json")
      .expectResponseTime(3000)
      .withBody(requestBody)
      .expectBodyContains("Login successful");

    token = resp.body.data.token;
    console.log(token);
  });
});
