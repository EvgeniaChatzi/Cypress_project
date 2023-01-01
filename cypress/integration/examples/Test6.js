/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import "cypress-iframe";

describe("My fifth Test", () => {
  it("bla blaaaa", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice");

    cy.frameLoaded("#courses-iframe");
    cy.iframe().find("a[href*='mentorship']").eq(0).click();
    cy.iframe().find("h1[class*='pricing-title']").should("have.length", 2);
  });
});
