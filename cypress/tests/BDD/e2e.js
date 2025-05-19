import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../support/pageObjects/HomePage"


const homePage = new HomePage()

Given('I am on the login page',function(){
    homePage.goTo('/loginpagePractise/#')
})

When('I login to the application',function(){
        const productPage = homePage.
        login(this.data.username, this.data.password);
        const productName = this.data.productName;
        productPage.selectProduct(productName);

})

When('I add items to Cart and checkout', function () {
    this.productPage.selectProduct(this.data.productName)
    this.productPage.selectFirstProduct()
    this.cartPage = this.productPage.goToCart()
})

When('Validate the total price limit', function () {
    this.cartPage.sumOfProducts().then(function (sum) {
        expect(sum).to.be.lessThan(200000);
    })

})

Then('select the country submit and verify Thankyou', function () {
    const confirmationPage = this.cartPage.checkoutItems()
    confirmationPage.submitFormDetails()
    confirmationPage.getAlertMessage().should('contain', 'Success')

})