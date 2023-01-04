import { When, Given, Then } from "@badeball/cypress-cucumber-preprocessor";
// import { includes } from "cypress/types/lodash";
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

When(/^I copy the employee id test$/, function () {
  cy.get(".user-form-header-text").then((id) => {
    const idtext = id.text().trim();

    cy.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>", idtext);
    cy.wrap(idtext).as("idtextt");
  });
});

When(/^trying something$/, function () {
  cy.log("its workinggggggggg", this.idtextt);
});

Then(
  /^I can see that the user "(.*)" is successfuly created$/,
  function (user) {
    orangePimPage.getUserNameSelector().should(($el) => {
      const text = $el.text();

      expect(text).to.include(user);
      // expect(text).not.to.include("bar");
    });
  }
);

When(/^I select "(.*)" from the "(.*)" dropdown$/, function (item, dropdown) {
  orangePimPage.getDropdownByName(dropdown).click();
  cy.contains(item).click({ force: true });
});

When(/^I select the "(.*)" gender$/, function (gender) {
  orangePimPage.getGenderRadioButton(gender).click({ force: true });
});

When(/^I click the save button with index "(.*)"$/, function (index) {
  orangePimPage.getSaveButtonByIndex(index).click();
});

When(/^I copy the personal details$/, function () {
  cy.get(
    ".orangehrm-vertical-padding:nth-of-type(1) .oxd-grid-item--gutters:nth-of-type(1) [tabindex]"
  ).then((item) => {
    const nationalityText = item.text().trim();

    cy.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>", nationalityText);
    cy.wrap(nationalityText).as("nationality");
  });
});

When(/^I select my newly created user "(.*)"$/, function (user) {
  orangePimPage.getEmployeesNamesSelector().each((el, index, $list) => {
    const text = el.find("div").text();
    if (text.includes(user)) {
      // cy.wrap(el).parent().click();
      orangePimPage.getEmployeesNamesSelector().eq(index).click();
    }
  });
});

Then(/^I can see the copied details match the values$/, function () {
  const national = this.nationality;
  cy.get(
    " .orangehrm-vertical-padding:nth-of-type(1) .oxd-grid-item--gutters:nth-of-type(1) [tabindex]"
  ).should("have.text", national);
});

Then(/^I delete the user I just created$/, function () {
  orangePimPage.getEmployeesNamesSelector().each((el, index, $list) => {
    const text = el.find("div").text();
    if (text.includes("Evgenia")) {
      // cy.wrap(el).parent().click();
      orangePimPage.getDeleteButton().eq(index).click({ force: true });
    }
  });

  orangePimPage.getDeleteButtonInModal().click();
});

Then(/^I can no longer see the user$/, function () {
  cy.get("[role] .oxd-table-card [role='row']")
    .contains("Evgenia")
    .should("not.exist");
});
