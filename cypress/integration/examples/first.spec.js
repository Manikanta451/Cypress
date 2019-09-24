/// <reference types="Cypress" />

describe('First Suite', function(){

it('First TestCase',function(){

    cy.visit(Cypress.env("url"));
    cy.get("input[ng-model='username']").type('admin');
    cy.get("input[ng-model='password']").type('admin');
    cy.get("button[type=submit]").click();
    cy.title().should('eq', 'Doccept')
    
})

})