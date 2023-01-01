/// <reference types="Cypress" />

import HomePage from "../pageObjects/HomePage";
import ShopPage from "../pageObjects/ShopPage";

describe("My fifth Test", () => {
  before(function () {
    cy.fixture("example").then(function (data) {
      globalThis.data = data;
    });
  });

  it("bla blaaaa", () => {
    const homePage = new HomePage();
    const shopPage = new ShopPage();

    // cy.visit("https://rahulshettyacademy.com");
    cy.visit(Cypress.env("url") + "/angularpractice/");

    homePage.getEditBox().type(globalThis.data.name);
    homePage.getGender().select("Female");
    // cy.get(":nth-child(4) > .ng-untouched").should(
    //   "have.value",
    //   globalThis.data.name
    // );
    cy.get("form input.form-control:nth(0)").should(
      "have.attr",
      "minlength",
      "2"
    );
    homePage.getRadioButton().should("be.disabled");

    homePage.getShopTab().click();

    cy.selectProduct("Blackberry");
    // cy.pause();
    cy.selectProduct("Nokia Edge");

    shopPage.getCheckoutButton().click();

    let sum = 0;
    cy.get("tr td:nth-child(4) strong")
      .each((el, index) => {
        const actualText = el.text();
        let result = actualText.split(" ");

        result = result[1].trim();
        sum += Number(result);
        cy.log(result);
      })
      .then(function () {
        cy.log(sum);
      });

    cy.get("h3 strong").then(function (el) {
      const actualText = el.text();
      let total = actualText.split(" ");
      total = Number(total[1].trim());

      expect(total).to.equal(sum);
    });

    cy.contains("Checkout").click();
    cy.get("#country").type("Greece");
    cy.get(".suggestions ul li a").click();
    cy.get("#checkbox2").click({ force: true });
    cy.get("input[type = 'submit']").click();
    // cy.get(".alert").should(
    //   "have.text",
    //   "Success! Thank you! Your order will be delivered in next few weeks :-)."
    // );

    cy.get(".alert").should("include.text", "Success");
  });
});
