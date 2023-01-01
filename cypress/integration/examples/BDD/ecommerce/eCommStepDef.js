import { When, Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../../pageObjects/HomePage";
import ShopPage from "../../../pageObjects/ShopPage";

const homePage = new HomePage();
const shopPage = new ShopPage();

Given("I open the eCommerce website", function () {
  cy.visit(Cypress.env("url") + "/angularpractice/");
});

When("I add items to the card", () => {
  homePage.getShopTab().click();

  cy.selectProduct("Blackberry");
  // cy.pause();
  cy.selectProduct("Nokia Edge");

  shopPage.getCheckoutButton().click();
});

When("I validate the total prices", function () {
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
});

When("I select the country", () => {
  cy.contains("Checkout").click();
  cy.get("#country").type("Greece");
  cy.get(".suggestions ul li a").click();
  cy.get("#checkbox2").click({ force: true });
});

When("I click the submit button", () => {
  cy.get("input[type = 'submit']").click();
});

Then("I can see the success message", () => {
  cy.get(".alert").should("include.text", "Success");
});
