/// <reference types="cypress" />

describe("Add to cart test suite", () => {
  
    it("Add to cart test", () => {
      cy.get('#ui-id-8').click();
      cy.get('li[class="item"]> a[href="https://magento.softwaretestingboard.com/women/tops-women/tanks-women.html"]').click();
      cy.get("li[class='item product product-item']:nth-child(1)").click();
      cy.get("div[option-label='S']").click();
      cy.get("div[option-label='Purple']").click();
      cy.get('#qty').clear().type('5');
      cy.get('#product-addtocart-button').click();
      cy.contains('You added Breathe-Easy Tank to your shopping cart.').should('be.visible');
    });
  });
  