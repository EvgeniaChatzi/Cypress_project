Feature: eCommerce website smoke tests

@Smoke
    Scenario: e2e user flow validation
    Given I open the eCommerce website
    When I add items to the card
    And I validate the total prices
    And I select the country
    And I click the submit button
    Then I can see the success message