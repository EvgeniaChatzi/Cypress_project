/// <reference types="Cypress" />

describe("My Second Test", () => {
  it("Opens url!", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.wait(2000);

    cy.get(".products")
      .find(".product")
      .each(($el, index, $list) => {
        const text = $el.find("h4.product-name").text();
        if (text.includes("Cashews")) {
          cy.wrap($el).find("button").click();
        }
      });

    cy.get(".cart-icon").click();
    cy.contains("PROCEED TO CHECKOUT").click();
    cy.contains("Place Order").click();
  });
});
