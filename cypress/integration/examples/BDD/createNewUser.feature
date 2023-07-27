Feature: User can create an account

    User can create an account so they can shop on the website

    Scenario: User can create an account with valid inputs
        Given I am on the account creation page
        And I enter a valid email
        And I enter a valid password 
        