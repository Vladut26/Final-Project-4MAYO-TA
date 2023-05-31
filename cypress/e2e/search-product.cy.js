/// <reference types="cypress" />

describe("Search product test suite", () => {
  

  it("Search product test", () => {
    cy.get('#search').type('tees').type('{enter}');
    cy.contains("3 Items").should('be.visible');
  });
});
