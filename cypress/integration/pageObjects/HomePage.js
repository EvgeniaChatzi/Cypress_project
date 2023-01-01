class HomePage {
  getEditBox() {
    return cy.get("form input.form-control:nth(0)");
  }

  getGender() {
    return cy.get("select");
  }

  getRadioButton() {
    return cy.get("#inlineRadio3");
  }

  getShopTab() {
    return cy.get(":nth-child(2) > .nav-link");
  }
}

export default HomePage;
