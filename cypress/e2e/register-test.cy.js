/// <reference types="cypress" />
import { faker } from "@faker-js/faker";
import NewAccountPage from "../pages/NewAccountPage";

describe("Register test suite", () => {
  

  it("register user", () => {
    const psw = faker.internet.password();
    cy.contains('Account').click();
    cy.contains("Create an Account").click();
    NewAccountPage.getFirstName().type(faker.person.firstName());
    NewAccountPage.getLastName().type(faker.person.lastName());
    NewAccountPage.getEmail().type(faker.internet.email());
    NewAccountPage.getPassword().type(psw);
    NewAccountPage.getConfirmPassword().type(psw);
    NewAccountPage.getCreateAnAccountBtn().click();
    cy.contains("Thank you for registering with Main Website Store.").should("be.visible");
  });
});
