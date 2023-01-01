/// <reference types="Cypress" />

describe("My Second Test", () => {
  it("Opens url!", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice");

    cy.get("#checkBoxOption1")
      .check()
      .should("be.checked")
      .and("have.value", "option1");

    cy.get("#checkBoxOption1").uncheck().should("not.be.checked");
    cy.get("input[type='checkbox']").eq(2).check();

    // cy.get("select").select("option2").should("have.value", "option2");
    cy.get("#autocomplete").type("ind");
    cy.get(".ui-menu-item-wrapper").each(($el, index, $list) => {
      if ($el.text() === "India") {
        cy.wrap($el).click();
      }
    });
    cy.get("#autocomplete").should("have.value", "India");
  });
});
