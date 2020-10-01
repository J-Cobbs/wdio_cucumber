Feature: Retrieving forgotten password
    As a tester
    I want to get new password
    
Scenario: Retrieving password
    Given I am on forgot password page
    When I fill in valid password
    And I submit request by pressing cta
    Then email is sent and I have proper message
    