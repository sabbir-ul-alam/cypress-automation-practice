
import HomePage from '../../support/pageObjects/HomePage'

describe('End to end Test' ,function(){

    before(function(){
        cy.fixture('fixtureData').then(function(data){
            this.data = data;
        })
    });

    it('Login and submit an order', function(){
        const homePage = new HomePage();
        const productName = this.data.productName;
        homePage.goTo('/loginpagePractise/#');
        const productPage =homePage.
        login(this.data.username, this.data.password);
        productPage.selectProduct(productName);
        const cartPage = productPage.goToCart();
        const confirmPage = cartPage.checkout();
        confirmPage.purchase();
        

    });
});