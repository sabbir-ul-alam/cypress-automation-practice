class CartPage{
    checkout(){
        cy.contains('button','Checkout').click();
        return new ConfirmationPage();
    }
}