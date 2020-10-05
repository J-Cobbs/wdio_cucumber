Feature: Log in to website
    As a tester
    I want to check log in feature

#Sad path 
Scenario: Typing in invlid credentials
    Given I am on login page
    When I fill in invalid username
    And I fill any credentials in password field
    Then banner appears on top of the page
    
#Happy path
Scenario: Typing in valid credentials
    Given I am on login page
    When I fill in valid username
    And I fill valid credentials in password field
    Then banner appears on top of the page
    And I can log out from the page
