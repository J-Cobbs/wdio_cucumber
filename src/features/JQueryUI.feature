Feature: Hovering on JQuery menu
    As a tester
    I want to hover on an enable menu and back to JQuery UI page

Scenario: Hovering on an JQuery menu
    Given I am on menu page
    When I hover on enabled menu
    Then I can hover on Back to JQuery UI option and click it
    And I'm redirected to specyfic page
