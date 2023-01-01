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
}

export default OrangePimPage;
