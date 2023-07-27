/// <reference types="cypress" />


import homePage from "../pom/homePage"
import loginPage from "../pom/loginPage"
import computersPage from "../pom/computersPage"
import loggedInPage from "../pom/loggedInPage"

describe("test", function() {

    before(function() {
        cy.fixture("newUserDetails").then(function(data){
            this.data=data
        })
    })

    it("Navigate to the landing page and creates a new account", function() {

        cy.visit("https://demo.nopcommerce.com/")

        //navigate to the homepage and click the login button
        new homePage().getLoginButton().click() 

        //on the login page, enter username and password
        cy.login(this.data.email, this.data.password)

        //click the account login button
        new loginPage().getAccountLoginButton().click()

        cy.get("button[type='submit']").should("have.attr", "class", "button-1 search-box-button")

        cy.get("h2").should("have.class", "product-title")

        //click the computer header on the logged in page
        new loggedInPage().getComputerHeader().click()

        //click the image for desktops
        new computersPage().getComputersImage().click()

        //cy.SelectProductAndAddToCart("Digital Storm")
        new computersPage().selectAndBuyComputer(this.data.desktopStorm)
    })
})