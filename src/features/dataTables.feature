Feature: Data table filtering
    As a tester
    I want to filter tables by clicking on column name

Scenario: Filtering by first name in Example 1 Table
    Given I am on tables page
    When I click on First Name column name
    Then table is filtered by name

Scenario: Filtering by email in Example 2 Table
    Given I am on tables page
    When I click on email column name
    Then table is filtered by email