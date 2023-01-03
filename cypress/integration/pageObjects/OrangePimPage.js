class OrangePimPage {
  getEmployeeInfoSelector() {
    return cy.get(".oxd-table-filter-title.oxd-text.oxd-text--h5");
  }

  getAddEmployeeNavBarItem(item) {
    return cy.get(".oxd-topbar-body-nav-tab").contains(item);
  }

  getEmployeeFirstNameSelector() {
    return cy.get("input[name='firstName']");
  }

  getEmployeeMiddleNameSelector() {
    return cy.get("input[name='middleName']");
  }

  getEmployeeLastNameSelector() {
    return cy.get("input[name='lastName']");
  }

  getUserNameSelector() {
    return cy.get(".--strong.oxd-text.oxd-text--h6");
  }

  getDropdownByName(dropdown) {
    return cy
      .get("label")
      .contains(dropdown)
      .parent()
      .next()
      .find(".oxd-select-text");
  }

  getGenderRadioButton(gender) {
    return cy.get(".oxd-radio-wrapper").contains(gender);
  }

  X;
  getSaveButtonByIndex(index) {
    return cy.get(".orangehrm-left-space").eq(index);
  }

  getEmployeesNamesSelector() {
    return cy.get("[role] .oxd-table-card [role] [role='cell']:nth-of-type(3)");
  }
}

export default OrangePimPage;
