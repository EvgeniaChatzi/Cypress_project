class ShopPage {
  getCheckoutButton() {
    return cy.get("#navbarResponsive > .navbar-nav > .nav-item > .nav-link");
  }
}

export default ShopPage;
