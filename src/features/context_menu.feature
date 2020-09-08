Feature: context menu pop-up
    As a tester
    I want to make sure that alert pops up when right clicked on white place and error can be dismissed


Scenario: Right click on hot-spot functionality
    Given I am on context menu page
    When I right click on hot-spot
    And pop-up alert appears
    Then I can dismiss alert by pressing OK
