Feature: OrangeHrm  end to end flows


    Scenario: OrangeHrm login
    Given I open the "https://opensource-demo.orangehrmlive.com/" website
    When I insert a "Admin" username and "admin123" password
    And I click the "Login" button
    Then I validate that I am logged in 

    Scenario: Adding an employee and PIM page validations
    Given I open the "https://opensource-demo.orangehrmlive.com/" website
    When I insert a "Admin" username and "admin123" password
    And I click the "Login" button
    When I click the "PIM" sidebar menu item
    Then I can see the "Employee Information" card
    When I select the "Add Employee" navigation bar item
    And I insert the user's first name "Evgenia", middle name "Zenya" and last name "Chatzi"
    And I copy the employee id 
    And I click the "Save" button
    Then trying something
    Then I can see that the user "Evgenia Chatzi" is successfuly created
    When I select the nationality as "Greek"
    And I select date of birth "20"
    And I save my changes
    And I copy the personal details
    When I select the "Add Employee" navigation bar item
    Then I can see my newly created user and the copied details match the results
    When I delete the user I just created
    Then I can no longer see the user


    # apload code on github
    # finish the above steps
    # tags
    # sections 16, 17, 20
    # watch a github mini course
    # postman course
    # update linkedin


 





  