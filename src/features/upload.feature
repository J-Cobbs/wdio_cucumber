Feature: Uploading file
    As a tester
    I want to upload a file from desktop by choosing a file from particular path
    
Scenario: Uploading a file
    Given I am on upload page
    And I pick example file from path
    Then file gonna be uploaded
    