/* eslint-disable testing-library/await-async-utils */
/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("Change password", () => {
  it("entering a non-existent user email", () => {
    cy.visit("/forgot");
    cy.get("#email").type("luanapina@cpejr.com.br");
    cy.intercept("POST", "**/reset").as("sendLinkReq");
    cy.get(".style__SubmitButton-sc-wm5ymf-7").click();
    cy.wait("@sendLinkReq").its("response.statusCode").should("eq", 404);
  });
  it("entering a invalid email", () => {
    cy.visit("/forgot");
    cy.get("#email").type("ari@luby.");
    cy.get(".style__SubmitButton-sc-wm5ymf-7").click();
  });
  it("entering a valid email", () => {
    cy.get("#email").clear().type("ari@luby.com.br");
    cy.intercept("POST", "**/reset").as("sendLinkReq");
    cy.get(".style__SubmitButton-sc-wm5ymf-7").click();
    cy.wait("@sendLinkReq").its("response.statusCode").should("eq", 200);
  });
  it("entering unmatched passwords", () => {
    cy.get("#password").type("secret");
    cy.get("#confirmPassword").type("secret2");
    cy.get(".style__SubmitButton-sc-wm5ymf-7").click();
  });
  it("entering matched passwords", () => {
    cy.get("#password").clear().type("secret2");
    cy.get("#confirmPassword").clear().type("secret2");
    cy.intercept("POST", "**/reset/**").as("changePasswordReq");
    cy.get(".style__SubmitButton-sc-wm5ymf-7").click();
    cy.wait("@changePasswordReq").its("response.statusCode").should("eq", 200);
  });
});

describe("Login and Logout", () => {
  it("login with a invalid email", () => {
    cy.visit("/login");
    cy.get("#email").type("luana.pina@luby");
    cy.get("#password").type("1234");
    cy.get(".style__SubmitButton-sc-wm5ymf-7").click();
  });
  it("login with a valid email and invalid password", () => {
    cy.get("#email").clear().type("luana.pina@luby.software");
    cy.get("#password").clear().type("1234");
    cy.intercept("POST", "**/login").as("loginReq");
    cy.get(".style__SubmitButton-sc-wm5ymf-7").click();
    cy.wait("@loginReq").its("response.statusCode").should("eq", 401);
  });
  it("login with a valid credentials", () => {
    cy.get("#email").clear().type("luana.pina@luby.software");
    cy.get("#password").clear().type("secret");
    cy.intercept("POST", "**/login").as("loginReq");
    cy.get(".style__SubmitButton-sc-wm5ymf-7").click();
    cy.wait("@loginReq")
      .then(({ response }) => {
        Cypress.env("loginToken", response.body.token.token);
      })
      .its("response.statusCode")
      .should("eq", 200);
  });
  it("logout", () => {
    localStorage.setItem("bearer", Cypress.env("loginToken"));
    cy.visit("/home");
    cy.get(".styles__Logout-sc-v0qde6-4").click();
  });
});
