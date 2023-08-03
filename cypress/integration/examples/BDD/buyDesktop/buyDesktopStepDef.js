import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import envPage from "../../../pom/envPage"
import homePage from "../../../pom/homePage";
import loggedInPage from "../../../pom/loggedInPage";
import computersPage from "../../../pom/computersPage";
import loginPage from "../../../pom/loginPage";

before(function() {
    cy.fixture("newUserDetails").then(function(data){
        this.data=data
    })
})

Given("I am logged into the QA environment", function(){
    new envPage().getQaURL()
    new homePage().getLoginButton().click() 
    cy.login(this.data.email, this.data.password)
    new loginPage().getAccountLoginButton().click()
})

When("I navigate to the desktop page", function(){
    new loggedInPage().getComputerHeader().click()
    new computersPage().getComputersImage().click()
})

Then("I should be able to purchase a desktop computer", function(){
    new computersPage().selectAndBuyComputer(this.data.desktopStorm)
})