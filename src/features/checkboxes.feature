Feature: checkboxes homepage
    As a tester
    I want to make sure that checkboxes are selected

Scenario: Tick checkboxes on the page
    Given I am on Checkboxes page
    When I select first checkbox
    Then first checkbox is marked
