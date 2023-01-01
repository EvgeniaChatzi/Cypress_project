import { When, Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import OrangeHomePage from "../../../pageObjects/orangeHomePage";
import OrangePimPage from "../../../pageObjects/orangePimPage";

const orangeHomePage = new OrangeHomePage();
const orangePimPage = new OrangePimPage();

Given(/^I open the "(.*)" website$/, function (url) {
  cy.visit(url);
});

Given(
  /^I insert a "(.*)" username and "(.*)" password$/,
  function (username, password) {
    orangeHomePage.getUsernameInput().type(username);
    orangeHomePage.getPasswordInput().type(password);
  }
);

When(/^I click the "(.*)" button$/, function (button) {
  orangeHomePage.getButtonByText(button).click();
});

Then(/^I validate that I am logged in$/, function () {
  orangeHomePage
    .getDashboardBreadcrumb()
    .contains("Dashboard")
    .should("be.visible");
});

When(/^I click the "(.*)" sidebar menu item$/, function (text) {
  orangeHomePage.getSideBarMenuItemByText(text).click();
});

When(/^I can see the "(.*)" card$/, function (text) {
  orangePimPage.getEmployeeInfoSelector().should("have.text", text);
});

When(/^I select the "(.*)" navigation bar item$/, function (item) {
  orangePimPage.getAddEmployeeNavBarItem(item).click();
});

//   Then("Get Data from page", function () {
//     cy.get(".os-order-number").then($Oid => {
//         const Order = $Oid.text()
//         const Order_id = Order.replace(/[^0-9]/g, "")
//         cy.log("inside Then function" + Order_id)
//         cy.wrap(Order_id).as("wrapText")
//     })
// })

// Given("Go to Login", function () {

//     cy.log(this.wrapText)
// })

When(
  /^I insert the user's first name "(.*)", middle name "(.*)" and last name "(.*)"$/,
  function (firstName, middleName, LastName) {
    orangePimPage.getEmployeeFirstNameSelector().type(firstName);
    orangePimPage.getEmployeeMiddleNameSelector().type(middleName);
    orangePimPage.getEmployeeLastNameSelector().type(LastName);
  }
);

When(/^I copy the employee id$/, function () {
  cy.get(".user-form-header-text").then((id) => {
    const idtext = id.text().trim();

    cy.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>", idtext);
    cy.wrap(idtext).as("idtext");
  });
});

When(/^trying something$/, function () {
  cy.log("its workinggggggggg", this.idtext);
});
