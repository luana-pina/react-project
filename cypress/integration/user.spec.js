/* eslint-disable testing-library/await-async-utils */
/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("Create a new user", () => {
  it("entering a invalid name", () => {
    cy.visit("http://localhost:3000/register");
    cy.get("#name").type("Ma");
    cy.get("#email").type("matheus@biomedh.com.br");
    cy.get("#password").type("1234");
    cy.get(".style__SubmitButton-sc-wm5ymf-7").click();
  });
  it("entering a invalid email", () => {
    cy.get("#name").clear().type("Matheus");
    cy.get("#email").clear().type("matheus@biomedh");
    cy.get("#password").clear().type("1234");
    cy.get(".style__SubmitButton-sc-wm5ymf-7").click();
  });
  it("entering a exists email", () => {
    cy.get("#name").clear().type("Matheus");
    cy.get("#email").clear().type("matheus@biomedh.com.br");
    cy.get("#password").clear().type("12345");
    cy.intercept("POST", "**/user/create").as("regiserReq");
    cy.get(".style__SubmitButton-sc-wm5ymf-7").click();
    cy.wait("@regiserReq").its("response.statusCode").should("eq", 400);
  });
  it("entering a valids inputs", () => {
    cy.get("#name").clear().type("Matheus");
    cy.get("#email").clear().type("matheus@biomedh.com");
    cy.get("#password").clear().type("12345");
    cy.intercept("POST", "**/user/create").as("regiserReq");
    cy.get(".style__SubmitButton-sc-wm5ymf-7").click();
    cy.wait("@regiserReq").its("response.statusCode").should("eq", 200);
  });
});
describe("Update user", () => {
  it("change to a invalid name", () => {
    cy.intercept("GET", "**/user/my-account", (req) => {
      req.headers.Authorization =
        "Bearer OTQ.zbhcg9BjLpTfSjxdOnsoN0yIGIQCRnQinSd_XHovZTU12AX-42TFJQU_S5wG";
    }).as("getAccoutReq");
    cy.visit(
      "http://localhost:3000/account/OTQ.zbhcg9BjLpTfSjxdOnsoN0yIGIQCRnQinSd_XHovZTU12AX-42TFJQU_S5wG"
    );
    cy.wait("@getAccoutReq").its("response.statusCode").should("eq", 200);
    cy.get(".sc-dJjYzT").click();
    cy.get("#name").clear().type("Ma");
    cy.get(".sc-hGPBjI").click();
  });
  it("change to a valid name", () => {
    cy.intercept("PUT", "**/user/update", (req) => {
      req.headers.Authorization =
        "Bearer OTQ.zbhcg9BjLpTfSjxdOnsoN0yIGIQCRnQinSd_XHovZTU12AX-42TFJQU_S5wG";
    }).as("userUpdateReq");
    cy.intercept("GET", "**/user/my-account", (req) => {
      req.headers.Authorization =
        "Bearer OTQ.zbhcg9BjLpTfSjxdOnsoN0yIGIQCRnQinSd_XHovZTU12AX-42TFJQU_S5wG";
    }).as("getAccoutReq");
    cy.get("#name").clear().type("Manoel");
    cy.get(".sc-hGPBjI").click();
    cy.wait("@userUpdateReq").its("response.statusCode").should("eq", 200);
  });
  it("change to a invalid email", () => {
    cy.intercept("GET", "**/user/my-account", (req) => {
      req.headers.Authorization =
        "Bearer OTQ.zbhcg9BjLpTfSjxdOnsoN0yIGIQCRnQinSd_XHovZTU12AX-42TFJQU_S5wG";
    }).as("getAccoutReq");
    cy.get(".sc-dJjYzT").click();
    cy.wait("@getAccoutReq").its("response.statusCode").should("eq", 200);
    cy.get("#email").clear().type("manoel@luby");
    cy.get(".sc-hGPBjI").click();
  });
  it("change to a valid email", () => {
    cy.intercept("PUT", "**/user/update", (req) => {
      req.headers.Authorization =
        "Bearer OTQ.zbhcg9BjLpTfSjxdOnsoN0yIGIQCRnQinSd_XHovZTU12AX-42TFJQU_S5wG";
    }).as("userUpdateReq");
    cy.intercept("GET", "**/user/my-account", (req) => {
      req.headers.Authorization =
        "Bearer OTQ.zbhcg9BjLpTfSjxdOnsoN0yIGIQCRnQinSd_XHovZTU12AX-42TFJQU_S5wG";
    }).as("getAccoutReq");
    cy.get("#email").clear().type("manoel@luby.com");
    cy.get(".sc-hGPBjI").click();
    cy.wait("@userUpdateReq").its("response.statusCode").should("eq", 200);
  });
});
