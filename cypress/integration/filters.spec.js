/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable jest/valid-expect */
/* eslint-disable testing-library/await-async-utils */
/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("Filters in home page", () => {
  beforeEach(() => {
    localStorage.setItem(
      "bearer",
      "MTI5.s-yNAcHW5ck2sriVfvj3wImEgRM9BbRDcAqU-Cp_FIkEZWCy9gghSjAx_fLo"
    );
  });
  it("single filters", () => {
    cy.intercept("GET", "**/bet/all-bets").as("recentGamesReq");
    cy.intercept("GET", "**/cart_games").as("gamesReq");
    cy.visit("http://localhost:3000/home");
    cy.wait("@gamesReq")
      .then(({ response }) => {
        expect(response.body).has.property("types");
        Cypress.env("numberOfGames", response.body.types.length);
      })
      .its("response.statusCode")
      .should("eq", 200);
    cy.wait("@recentGamesReq").its("response.statusCode").should("eq", 200);
    Cypress._.times(Cypress.env("numberOfGames"), (k) => {
      cy.get(`#\\3${k + 1} `).click();
      cy.get(`#\\3${k + 1} `).click();
    });
  });
  it("multiple filters", () => {
    Cypress._.times(Cypress.env("numberOfGames"), (k) => {
      cy.get(`#\\3${k + 1} `).click();
    });
  });
  it("any filter", () => {
    Cypress._.times(Cypress.env("numberOfGames"), (k) => {
      cy.get(`#\\3${k + 1} `).click();
    });
  });
});
