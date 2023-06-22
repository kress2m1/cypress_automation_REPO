/// <reference types="cypress" />

describe("Create a user account at ParaBank", function() {
    it("Navigate to the landing page and creates a new account", function() {

        cy.visit("https://parabank.parasoft.com/parabank/index.htm")

        cy.readFile("cypress\\fixtures\\newUserDetails.json").then((newUserDetails) => {

            cy.contains("Register").click()
            cy.get("input[id='customer.firstName']").type(newUserDetails.firstName)
            cy.get("input[id='customer.lastName']").type(newUserDetails.surname)
            cy.get("input[id='customer.address.street']").type(newUserDetails.street)
            cy.get("input[id='customer.address.city']").type(newUserDetails.city)
            cy.get("input[id='customer.address.state']").type(newUserDetails.state)
            cy.get("input[id='customer.address.zipCode']").type(newUserDetails.zipCode)
            cy.get("input[id='customer.phoneNumber']").type(newUserDetails.phoneNumber)
            cy.get("input[id='customer.ssn']").type(newUserDetails.ssn)
            cy.get("input[id='customer.username']").type(newUserDetails.userName)
            cy.get("input[id='customer.password']").type(newUserDetails.password)
            cy.get("input[id='repeatedPassword']").type(newUserDetails.confirmPassword)
            cy.get("input[value='Register']").click()
        })
    })
})
