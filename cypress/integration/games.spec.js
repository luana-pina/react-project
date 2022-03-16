/* eslint-disable jest/valid-expect */
/* eslint-disable testing-library/await-async-utils */
/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("create card games", () => {
  beforeEach(() => {
    localStorage.setItem(
      "bearer",
      "MTI5.s-yNAcHW5ck2sriVfvj3wImEgRM9BbRDcAqU-Cp_FIkEZWCy9gghSjAx_fLo"
    );
    cy.request("GET", "http://127.0.0.1:3333/cart_games").then((response) => {
      expect(response.body).to.have.property("types");
      Cypress.env("games", response.body.types);
      Cypress.env("numberOfGames", response.body.types.length);
    });
  });
  Cypress._.times(Cypress.env("numberOfGames"), (count) => {
    describe(`game ${count + 1}`, () => {
      it("with a fewer numbers than allowed", () => {
        cy.intercept("GET", "**/cart_games").as("gamesReq");
        cy.visit(`http://localhost:3000/games/${count + 1}`);
        cy.wait("@gamesReq").its("response.statusCode").should("eq", 200);
        Cypress._.times(Cypress.env("games")[count]["max_number"] - 1, (i) => {
          cy.get(
            `:nth-child(${i + 1}) > .styles__ButtonTable-sc-1ym7qlp-0`
          ).click();
        });
        cy.get(".sc-hKwDye").click();
      });
      it("select more numbers than allowed", () => {
        cy.intercept("GET", "**/cart_games").as("gamesReq");
        cy.visit(`http://localhost:3000/games/${count + 1}`);
        cy.wait("@gamesReq").its("response.statusCode").should("eq", 200);
        Cypress._.times(Cypress.env("games")[count]["max_number"] + 1, (i) => {
          cy.get(
            `:nth-child(${i + 1}) > .styles__ButtonTable-sc-1ym7qlp-0`
          ).click();
        });
      });
      it("select exact numbers than allowed", () => {
        cy.intercept("GET", "**/cart_games").as("gamesReq");
        cy.visit(`http://localhost:3000/games/${count + 1}`);
        cy.wait("@gamesReq").its("response.statusCode").should("eq", 200);
        Cypress._.times(Cypress.env("games")[count]["max_number"], (i) => {
          cy.get(
            `:nth-child(${i + 1}) > .styles__ButtonTable-sc-1ym7qlp-0`
          ).click();
        });
        cy.get(".sc-hKwDye").click();
        expect(cy.get(".sc-pVTFL"));
      });
    });
  });
});

describe("delete card games", () => {
  beforeEach(() => {
    localStorage.setItem(
      "bearer",
      "MTI5.s-yNAcHW5ck2sriVfvj3wImEgRM9BbRDcAqU-Cp_FIkEZWCy9gghSjAx_fLo"
    );
  });
  Cypress._.times(Cypress.env("numberOfGames"), (count) => {
    it(`game ${count + 1}`, () => {
      cy.intercept("GET", "**/cart_games").as("gamesReq");
      cy.visit(`http://localhost:3000/games/${count + 1}`);
      cy.wait("@gamesReq").its("response.statusCode").should("eq", 200);
      cy.get(".sc-gsDKAQ").click();
      cy.get(".sc-hKwDye").click();
      cy.get(".styles__DeleteIcon-sc-2r9vc5-0").click();
      cy.get(".emOCLN").click();
    });
  });
});

describe("save cart", () => {
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
    Cypress._.times(4, () => {
      cy.get(".sc-gsDKAQ").click();
      cy.get(".sc-hKwDye").click();
    });
    cy.get(".sc-furwcr").click();
    cy.wait("@newBetReq").its("response.statusCode").should("eq", 200);
  });
});
