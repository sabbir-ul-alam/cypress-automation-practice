import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../support/pageObjects/HomePage"

beforeEach

const homePage = new HomePage()

Given('I am on the login page',()=>{
    homePage.goTo('/loginpagePractise/#')
})

When('I login to the application',()=>{
        const productPage = homePage.
        login(this.data.username, this.data.password);
        const productName = this.data.productName;
        productPage.selectProduct(productName);

})

When('I add items to Cart'), ()=>{
    
}