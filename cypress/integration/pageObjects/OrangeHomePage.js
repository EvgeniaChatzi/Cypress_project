class OrangeHomePage {
  getUsernameInput() {
    return cy.get("input[name='username']");
  }

  getPasswordInput() {
    return cy.get("input[name='password']");
  }

  getButtonByText(button) {
    return cy.get("button[type='submit']").contains(button);
  }

  getDashboardBreadcrumb() {
    return cy.get("h6.oxd-topbar-header-breadcrumb-module");
  }

  //   getSideBarMenuItemByText(text) {
  //     return cy
  //       .get(".oxd-main-menu")
  //       .find(".oxd-main-menu-item")

  //       .each(($el, index, $list) => {
  //         const actualText = $el.find("span.oxd-main-menu-item--name").text();
  //         if (actualText.includes(text)) {
  //           cy.wrap($el).click();
  //         }
  //       });
  //   }

  getSideBarMenuItemByText(text) {
    return cy.get(".oxd-main-menu").find(".oxd-main-menu-item").contains(text);
  }
}

export default OrangeHomePage;
