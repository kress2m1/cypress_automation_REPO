/// <reference types="cypress" />

describe("Create a user account at ParaBank", function() {
    it("Navigate to the landing page and creates a new account", function() {
        cy.visit("https://parabank.parasoft.com/parabank/index.htm")

        cy.get("input[name='username']").type("Andre3000")
        cy.get("input[name='password']").type("password1234")
        cy.get("input[value='Log In']").click()
      
        cy.contains("Andre Dada").should("contain.text", "Andre Dada")

    })
})
