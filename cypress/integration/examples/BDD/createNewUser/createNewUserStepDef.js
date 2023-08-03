import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import envPage from "../../../pom/envPage"
import registrationPage from "../../../pom/registrationPage";
import homePage from "../../../pom/homePage";

before(function() {
    cy.fixture("newUserDetails").then(function(data){
        this.data=data
    })
})

Given("I am on the account creation page", function(){
    new envPage().getQaURL()
    new homePage().getRegisterButton().click()
})

When("I select my gender", function(){
    new registrationPage().getGenderMale().click()
})

When("I enter my firstname", function(){
    new registrationPage().getFirstName().type(this.data.firstName)
})

When("I enter my lastname", function(){
    new registrationPage().getLastName().type(this.data.surname)
})

When("I enter my dayOfbirth", ()=> {
    new registrationPage().getDayOfBirth().select(3)
})

When("I enter my monthOfBirth", ()=> {
    new registrationPage().getMonthOfBirth().select("June")
})

When("I enter my yearOfBirth", ()=> {
    new registrationPage().getYearOfBirth().select(43)
})

When("I enter my email", function() {
    new registrationPage().getEmail().type(this.data.email)
})

When("I enter my company details", function(){
    new registrationPage().getCompany().type(this.data.company)
})

When("I confirm I dont want to be contact by newsletter", ()=> {
    new registrationPage().getNewsletter().uncheck()
})

When("I enter my password", function() {
    new registrationPage().getPassword().type(this.data.password)
})

When("I confirm my password", function() {
    new registrationPage().getConfirmPassword().type(this.data.confirmPassword)
})

When("I select the Register button", function() {
    new registrationPage().getRegisterButton().click()
})

Then("my account should be created and I should see a welcome message", ()=> {
    new registrationPage().getWElcomeMessage()
})