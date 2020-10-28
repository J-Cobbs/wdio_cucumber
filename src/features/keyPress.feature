Feature: Interaction of key pressed
    As a tester
    I want to check interaction once key is typed into a field

Scenario: Click for JS alert
    Given I am on key presses page
    When I set some characters
    Then message displays last key entered
