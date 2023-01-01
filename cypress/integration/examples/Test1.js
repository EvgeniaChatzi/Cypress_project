/// <reference types="Cypress" />

describe("My First Test", () => {
  it("Opens url!", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.wait(2000);
    cy.get(".product:visible").should("have.length", 4);

    // parent child chaining
    cy.get(".products").find(".product").should("have.length", 4);
    cy.get(".products").find(".product").eq(1).contains("ADD TO CART").click();

    // cy.get(".products").each(($el, index, $list) => {
    //   // $el is a wrapped jQuery element
    //   if ($el.someMethod() === "something") {
    //     // wrap this element so we can
    //     // use cypress commands on it
    //     cy.wrap($el).click();
    //   } else {
    //     // do something else
    //   }
    // });

    cy.get(".products")
      .find(".product")
      .each(($el, index, $list) => {
        const text = $el.find("h4.product-name").text();
        if (text.includes("Cashews")) {
          cy.wrap($el).find("button").click();
        }
      });

    cy.get(".brand").then(function (logo) {
      cy.log(logo.text());
    });
    console.log("blaaaaaaaaaaaaaaaaaa");

    cy.get(".brand").should("have.text", "GREENKART");
  });
});
