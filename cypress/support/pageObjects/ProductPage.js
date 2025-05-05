class ProducPage{

    selectProduct(productName){
        cy.get('app-card').filter(`:contains("${productName})`
            .then($el => {
                cy.wrap($el).contains('button','Add').click()
                
            })
        )
    }

    goToCart(){
        cy.contains('a','Checkout').click()
        return new CartPage()
    }

}