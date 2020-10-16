Feature: Hovering on user's image
    As a tester
    I want to hover on an image to see additional information

Scenario: Hovering on an image
    Given I am on hover page
    When I hover on particular picture
    Then additional information will appear below the picture
