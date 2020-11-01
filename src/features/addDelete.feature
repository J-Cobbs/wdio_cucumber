Feature: Adding and removing elements
    As a tester
    I want to add and then remove elements from the page

Scenario: Adding elements
    Given I am on add and remove page
    When I click on add element button
    Then remove buttons appears below

Scenario: Removing elements
    Given I am on add and remove page
    When I click on remove button
    Then remove buttons disappears
