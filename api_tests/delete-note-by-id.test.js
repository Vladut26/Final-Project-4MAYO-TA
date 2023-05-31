const { spec, request } = require("pactum");
const { faker } = require("@faker-js/faker");
const base_URL = "https://practice.expandtesting.com/notes/api/";

describe("Create a note test suite", () => {
  before(() => {
    request.setDefaultTimeout(5000);
  });

  const name = faker.person.firstName();
  const email = faker.internet.email();
  const psw = faker.internet.password();

  const requestBodyUser = {
    name: name,
    email: email,
    password: psw,
  };

  const requestBodyCredentials = {
    email: email,
    password: psw,
  };

  const requestBodyNote = {
    title: faker.person.jobTitle(),
    description: faker.person.jobDescriptor(),
    category: "Work",
  };

  it("Register user test", async () => {
    await spec()
      .post(base_URL + "users/register")
      .expectStatus(201)
      .withHeaders("content-type", "application/json")
      .expectResponseTime(3000)
      .withBody(requestBodyUser)
      .expectBodyContains("User account created successfully");
  });

  let token = "";

  it("Login user test", async () => {
    const resp = await spec()
      .post(base_URL + "users/login")
      .expectStatus(200)
      .withHeaders("content-type", "application/json")
      .expectResponseTime(3000)
      .withBody(requestBodyCredentials)
      .expectBodyContains("Login successful");

    token = resp.body.data.token;
  });
  let noteId = "";
  it("Create a note test", async () => {
    const note = await spec()
      .post(base_URL + "notes")
      .expectStatus(200)
      .withHeaders("x-auth-token", token)
      .expectResponseTime(3000)
      .withBody(requestBodyNote);

    noteId = note.body.data.id;
    console.log(noteId);
  });

  it("Delete a note by ID test", async () => {
    await spec()
      .delete(base_URL + "notes/" + noteId)
      .expectStatus(200)
      .withHeaders("x-auth-token", token)
      .expectResponseTime(3000);
  });
});
