/// <reference types="cypress" />

describe("Create a user account at ParaBank", function() {
    it("Navigate to the landing page and creates a new account", function() {
        cy.visit("https://parabank.parasoft.com/parabank/index.htm")

        cy.readFile("cypress\\fixtures\\newUserDetails.json").then((newUserDetails) => {

        cy.get("input[name='username']").type(newUserDetails.userName)
        cy.get("input[name='password']").type(newUserDetails.password)
        cy.get("input[value='Log In']").click()
      
        cy.contains(newUserDetails.displayName).should("contain.text", newUserDetails.displayName)
        })
    })
})
