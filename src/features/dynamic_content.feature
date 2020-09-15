Feature: Dynamic content
    As a tester
    I want to have different content after page refresh


Scenario: Change of content
    Given I am on dynamic content page
    When I refresh page
    Then Content has changed