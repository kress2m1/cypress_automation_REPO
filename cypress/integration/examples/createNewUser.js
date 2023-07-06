/// <reference types="cypress" />

describe("Create a user account at ParaBank", function() {

    before(function() {
        cy.fixture("newUserDetails").then(function(data){
            this.data=data
        })
    })

    it("Navigate to the landing page and creates a new account", function() {
        cy.visit("https://demo.nopcommerce.com/")

        //cy.contains("Register").click()
        cy.get(".ico-register").click()

        cy.get("#gender-male").click()
        cy.get("#FirstName").type(this.data.firstName)
        cy.get("#LastName").type(this.data.surname)
        cy.get("select[name='DateOfBirthDay']").select(3)
        cy.get("select[name='DateOfBirthMonth']").select(3)

        cy.get("select[name='DateOfBirthYear']").select(3)
        cy.get("#Email").type(this.data.email)
        cy.get("#Company").type(this.data.company)

        cy.get("#Newsletter").uncheck()

        cy.get("#Password").type(this.data.password)
        cy.get("#ConfirmPassword").type(this.data.confirmPassword)
        cy.get("#register-button").click()

        //cy.get('.result').contains("Your registration completed")

    })
})
