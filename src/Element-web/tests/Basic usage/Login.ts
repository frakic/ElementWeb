/// <reference types="cypress" />

describe("User can log in with correct credentials", () => {
  it("redirects the user to homepage after a successful login", () => {
    const username = Cypress.env("basicUser").username;
    const password = Cypress.env("basicUser").password;
    const securityKey = Cypress.env("basicUser").securityKey;

    cy.visit("?#/login");
    cy.title().should("eq", "Element");

    cy.get("[name=username]").type(username);
    cy.get("[name=password]").type(password);
    cy.get(".mx_Login_submit").click();

    //Grabbing DOM elements by their content or class name is generally not
    //a great idea but it serves the purpouse for this demo
    cy.get(".mx_CompleteSecurity_actionRow").within(() => {
      cy.contains("Verify with Security Key").should("be.visible").click();
    });

    cy.get("input[type=password]").should("be.visible").type(securityKey);
    cy.get("button").contains("Continue").should("not.be.disabled").click();

    cy.get(".mx_CompleteSecurity_header").within(() => {
      cy.contains("Session verified").should("exist");
    });
    cy.get("[role=button]").contains("Done").click();

    cy.location("href").should("contain", "/?#/home");
    cy.contains("Welcome to Element").should("exist");
  });
});
