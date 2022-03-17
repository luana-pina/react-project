/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable jest/valid-expect */
/* eslint-disable testing-library/await-async-utils */
/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("Add and delete items to cart", () => {
  beforeEach(() => {
    localStorage.setItem(
      "bearer",
      "MTI5.s-yNAcHW5ck2sriVfvj3wImEgRM9BbRDcAqU-Cp_FIkEZWCy9gghSjAx_fLo"
    );
    cy.intercept("GET", "**/cart_games").as("gamesReq");
    cy.visit("http://localhost:3000/games/1");
    cy.wait("@gamesReq")
      .then(({ response }) => {
        Cypress.env("numberOfGames", response.body.types.length);
        expect(response.body).has.property("types");
        Cypress.env("games", response.body.types);
      })
      .its("response.statusCode")
      .should("eq", 200);
  });
  it.skip("add items to cart with a fewer numbers than allowed", () => {
    cy.selectNumbers(-1);
  });
  it.skip("add items to cart with more numbers than allowed", () => {
    cy.selectNumbers(1);
  });
  it.skip("add items to cart with exact numbers than allowed", () => {
    cy.selectNumbers(0);
  });
  it("delete items to cart (on cancel)", () => {
    cy.selectNumbers(0);
    cy.deleteItem(false);
    cy.get(".sc-pVTFL")
      .children()
      .should("have.length", Cypress.env("numberOfGames"));
  });
  it("delete items to cart (on confirm)", () => {
    cy.selectNumbers(0);
    cy.deleteItem(true);
    cy.get(".sc-pVTFL").children().should("have.length", 1);
  });
});

describe.skip("Save cart", () => {
  beforeEach(() => {
    localStorage.setItem(
      "bearer",
      "MTI5.s-yNAcHW5ck2sriVfvj3wImEgRM9BbRDcAqU-Cp_FIkEZWCy9gghSjAx_fLo"
    );
  });
  it("save cart with a lower amount than allowed", () => {
    cy.intercept("GET", "**/cart_games").as("gamesReq");
    cy.intercept("POST", "**/bet/new-bet").as("newBetReq");
    cy.visit("http://localhost:3000/games/1");
    cy.wait("@gamesReq").its("response.statusCode").should("eq", 200);
    cy.get(".sc-gsDKAQ").click();
    cy.get(".sc-hKwDye").click();
    cy.get(".sc-furwcr").click();
    cy.wait("@newBetReq").its("response.statusCode").should("eq", 400);
  });
  it("save cart with the allowed amount", () => {
    cy.intercept("GET", "**/cart_games").as("gamesReq");
    cy.intercept("POST", "**/bet/new-bet").as("newBetReq");
    cy.visit("http://localhost:3000/games/1");
    cy.wait("@gamesReq").its("response.statusCode").should("eq", 200);
    cy.AddAllGames();
    cy.get(".sc-furwcr").click();
    cy.wait("@newBetReq").its("response.statusCode").should("eq", 200);
  });
});
