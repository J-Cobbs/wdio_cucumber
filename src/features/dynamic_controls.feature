Feature: Dynamic controls
    As a tester
    I want to check behavior of different controls

Scenario: Selecting and removing checkbox
    Given I am on dynamic control page
    When I select a checkbox
    And I press remove button
    Then checkbox is gone
    And I have appropriate message displayed

Scenario: Adding checkbox
    Given I am on dynamic control page
    When checkbox is not visible
    And I press add button
    Then checkbox is visible
    And I have appropriate message displayed