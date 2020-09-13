Feature: Drag & drop elements to each other
    As a tester
    I want to drag and drop boxes


Scenario: Drag and drop element A to element B
    Given I am on drag and drop page
    When I drag box A to Box B
    Then box A changed it's position

Scenario: Drag and drop element B to element A
    Given I am on drag and drop page
    When I drag box B to Box A
    Then box B changed it's position 
