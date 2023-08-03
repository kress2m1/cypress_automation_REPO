@regression
Feature: User can login and buy a desktop

    User is able to login so they can purchase an account

    @sanity
    Scenario: User can login and purchase a Digital Storm desktop
        Given I am logged into the QA environment
        And I navigate to the desktop page 
        Then I should be able to purchase a desktop computer

    @UAT
    Scenario: User can login and purchase a Lenovo desktop
        Given I am logged into the QA environment
        And I navigate to the desktop page 
        Then I should be able to purchase a desktop computer