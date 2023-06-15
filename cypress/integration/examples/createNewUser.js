/// <reference types="cypress" />

describe("Navigate to the sauncelab demo site", function() {
    it("Navigate to the landing page and log in", function() {
        cy.visit("https://parabank.parasoft.com/parabank/index.htm")

        cy.contains("Register").click()
        cy.get("input[id='customer.firstName']").type("Andre")
        cy.get("input[id='customer.lastName']").type("Dada")
        cy.get("input[id='customer.address.street']").type("1 Somewhere Street")
        cy.get("input[id='customer.address.city']").type("London")
        cy.get("input[id='customer.address.state']").type("Chelsea")
        cy.get("input[id='customer.address.zipCode']").type("12345")
        cy.get("input[id='customer.phoneNumber']").type("012345678910")
        cy.get("input[id='customer.ssn']").type("145-25-4578")
        cy.get("input[id='customer.username']").type("Andre3000")
        cy.get("input[id='customer.password']").type("password1234")
        cy.get("input[id='repeatedPassword']").type("password1234")
        cy.get("input[value='Register']").click()

        cy.contains("Welcome Andre3000").should("contain.text", "Welcome Andre3000")




    })
})
