/* eslint-disable no-undef */
Cypress.Commands.add("selectNumbers", (times) => {
  Cypress._.times(Cypress.env("numberOfGames"), (k) => {
    cy.get(`#\\3${k + 1}`).click();
    const maxNumbers = Cypress.env("games")[k]["max_number"];
    cy.log(maxNumbers);
    Cypress._.times(maxNumbers + times, (i) => {
      cy.get(
        `:nth-child(${i + 1}) > .styles__ButtonTable-sc-1ym7qlp-0`
      ).click();
    });
    cy.get(".sc-hKwDye").click();
  });
});
Cypress.Commands.add("AddAllGames", () => {
  Cypress._.times(Cypress.env("numberOfGames"), (k) => {
    cy.get(`#\\3${k + 1}`).click();
    cy.get(".sc-gsDKAQ").click();
    cy.get(".sc-hKwDye").click();
  });
});
Cypress.Commands.add("deleteItem", (cancel) => {
  Cypress._.times(Cypress.env("numberOfGames"), (k) => {
    cy.get(`:nth-child(1) > .styles__DeleteIcon-sc-2r9vc5-0`).click();
    if (!cancel) {
      cy.get(".jwCQHx").click();
    } else cy.get(".emOCLN").click();
  });
});
