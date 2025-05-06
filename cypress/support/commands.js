// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/// <reference types="cypress" />

Cypress.Commands.add('LoginAPI',()=>{
    cy.request(
        "POST",
        "https://rahulshettyacademy.com/api/ecom/auth/login",
        {
            "userEmail":"anshika@gmail.com",
            "userPassword":"Iamking@000"
        })
        .then(function(response){
            expect(response.status).to.equal(200);
            Cypress.env('token', response.body.token);
        })
});