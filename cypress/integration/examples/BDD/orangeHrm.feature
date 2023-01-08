Feature: OrangeHrm  end to end flows


    Background: OrangeHrm login
    Given I open the "https://opensource-demo.orangehrmlive.com/" website
    When I insert a "Admin" username and "admin123" password
    And I click the "Login" button
    Then I validate that I am logged in 

    Scenario: Adding an employee and PIM page validations
    When I click the "PIM" sidebar menu item
    Then I can see the "Employee Information" card
    When I select the "Add Employee" navigation bar item
    And I insert the user's first name "Evgenia", middle name "Zenya" and last name "Chatzi"
    And I copy the employee id test
    And I click the "Save" button
    Then trying something
    Then I can see that the user "Evgenia Chatzi" is successfuly created
    When I select "Greek" from the "Nationality" dropdown 
    And I select "Single" from the "Marital Status" dropdown 
    And I select the "Female" gender
    And I click the save button with index "0"
    And I copy the personal details
    When I select the "Employee List" navigation bar item
    Then I select my newly created user "Evgenia"
    And I can see the copied details match the values
    When I select the "Employee List" navigation bar item
    Then I delete the user I just created 
    Then I can no longer see the user
