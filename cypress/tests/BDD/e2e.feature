Feature: End to End validation

Scenario: Ecommerce products delivery
Given I am on the login page
When I login to the application
And I add items to Cart
And validate the total price limit
Then Select the country and varify
