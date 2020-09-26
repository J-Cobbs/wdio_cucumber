Feature: Overlay Modal
    As a tester
    I want to see overlay modal on first page visit

Scenario: Handle overlay modal
    Given I am on herokuapp page
    When I select entry_ad page
    Then modal window appears
    And I can close that window
    And I refresh page
    And modal doesn't appear

#I don't know what I can do here, but modal always gives false even though it appears or page is refreshed (when it shouldn't