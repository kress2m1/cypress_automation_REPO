/// <reference types="cypress" />

describe("test", function() {

    before(function() {
        cy.fixture("newUserDetails").then(function(data){
            this.data=data
        })
    })

    it("Navigate to the landing page and creates a new account", function() {
        cy.visit("https://demo.nopcommerce.com/")

        //cy.contains("Log in").click()
        cy.get("a[class='ico-login']").click()
        cy.get("#Email").type(this.data.email)

        cy.get("#Password").type(this.data.password)

        cy.get("button[class='button-1 login-button']").click()

        cy.get("button[type='submit']").should("have.attr", "class", "button-1 search-box-button")

        cy.get("h2").should("have.class", "product-title")
    })
})