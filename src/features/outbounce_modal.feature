Feature: Overlay Modal
    As a tester
    I want to see overlay modal when I hover mouse over the viewport


Scenario: Handle outbounce modal
    Given I am on exit_intent page
    When I hover a mouse out of the page
    Then outbounce modal window appears
    # similar situation as in previous example.
    # isAlertOpen always gives false
    # and Then step passed when we actually hover mouse by ourselves.
    # I think that there is no oprion to hover the mouse over the webpage. 