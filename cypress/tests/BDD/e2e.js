import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../support/pageObjects/HomePage"
import './beforeEach'


const homePage = new HomePage()

Given('I am on the login page', function () {
    homePage.goTo('/loginpagePractise/#')
})

When('I login to the application', function () {
    this.productPage = homePage.login(this.data.username, this.data.password);
    const productName = this.data.productName;
    this.productPage.selectProduct(productName);

})

When('I add items to Cart and checkout', function () {
    this.productPage.selectProduct(this.data.productName)
    this.cartPage = this.productPage.goToCart()
})


Then('select the country submit and verify Thank you', function () {
    const confirmationPage = this.cartPage.checkout()
    confirmationPage.purchase();
    confirmationPage.getAlertMessage().should('contain', 'Thank you!');

})