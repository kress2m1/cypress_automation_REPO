Feature: User can create an account

    User is able to create an account so they can shop on the website

    @smoke
    Scenario: User can create an account with valid inputs
        Given I am on the account creation page
        And I select my gender
        And I enter my firstname
        And I enter my lastname
        And I enter my dayOfbirth
        And I enter my monthOfBirth
        And I enter my yearOfBirth
        And I enter my email
        And I enter my company details
        And I confirm I dont want to be contact by newsletter
        And I enter my password
        And I confirm my password
        When I select the Register button
        Then my account should be created and I should see a welcome message
        