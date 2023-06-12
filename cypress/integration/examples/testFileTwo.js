/// <reference types="cypress" />

describe("Navigate to the sauncelab demo site", function() {
    it("Navigate to the landing page and log in", function() {
        cy.visit("https://www.saucedemo.com/")
    })
})
