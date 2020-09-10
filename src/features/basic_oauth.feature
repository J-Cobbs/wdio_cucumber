Feature: Login by basic authentication
    As a tester
    I want to log in to page by oauth


Scenario: Login to page by basic oauth
    Given I am on digest auth page
    When credentials are filled out
    Then I am successfully logged in to digest auth page
