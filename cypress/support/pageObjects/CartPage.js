import ConfirmationPage from '../pageObjects/ConfirmationPage'

class CartPage{
    checkout(){
        cy.contains('button','Checkout').click();
        return new ConfirmationPage();
    }
}

export default CartPage;