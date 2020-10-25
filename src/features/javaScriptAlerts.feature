Feature: Checking different JS alerts
    As a tester
    I want have JS alerts to be displayed and handled in the right way

Scenario: Click for JS alert
    Given I am on JS alerts page
    When I click on first button
    Then pop up appears 
    And I should be able to accept alert

Scenario: Dismissing JS alert
    Given I am on JS alerts page
    When I click on second button
    Then pop up appears
    And I should be able to dismiss alert

Scenario: Entering a text into a prompt alert
    Given I am on JS alerts page
    When I click on third button
    Then pop up appears
    And I should be able to type some text in
