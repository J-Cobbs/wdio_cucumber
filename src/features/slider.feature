Feature: Horizontal Slider
    As a tester
    I want to click and drag the slider with my mouse

Scenario: Dragging slider to indicate number 4
    Given I am on horizontal slider page
    When I drag slider to particular position
    Then I'll receive number 4 on indicator
