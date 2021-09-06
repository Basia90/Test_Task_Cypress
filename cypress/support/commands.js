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
Cypress.Commands.add('sender_data',() => {
    cy.get('#senderName').type('Mobisense Monika Mazurek')
    cy.get('#senderPostalCode').type('25-663')
    cy.get('#senderCity').type('Kielce')
    cy.get('#senderStreet').type('Olszewskiego')
    cy.get('#senderHouseNumber').type('6')
    cy.get('#senderFlatNumber').type('313')
    cy.get('#senderPhone').type('664540929')
    cy.get('#senderEmail').type('monika@sourceful.nl')
});
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
Cypress.Commands.add('recipient_data', (FirstAndLastName, Phone, Email) => {
    cy.get('#receiverName').type(FirstAndLastName)
    cy.get('#receiverPhone').type(Phone)
    cy.get('#receiverEmail').type(Email)
});
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload'