Feature: Dynamic controls
    As a tester
    I want to check behavior of different controls

Scenario: Selecting and removing checkbox
    Given I am on dynamic control page
    When I select a checkbox
    And I press remove button
    Then checkbox is gone
    And I have message displayed

Scenario: Adding checkbox
    Given I am on dynamic control page
    When checkbox is not visible
    And I press add button
    Then checkbox is visible
    And I have message displayed

Scenario: Enabling and disabling input field
    Given I am on dynamic control page
    When Input field is disabled
    And I press a button
    Then input field is enabled 
    And I can type any text
    When I press a button
    Then Input field is disabled again
