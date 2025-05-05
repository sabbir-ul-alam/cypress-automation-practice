class ConfirmationPage{
    purchase(){
        cy.get('#country').type('B');
    
        cy.get(".suggestions ul li a",{timeout: 10000})
        .each(($el)=>{
            if ($el.text().trim()==='Bangladesh'){
                cy.wrap($el).click();
            }
        });
        // cy.get(".suggestions",{timeout: 10000})
        // .contains('a', 'Bangladesh')
        // .click()
        cy.get('.checkbox label').click();
        cy.contains('input','Purchase').click();

    }

}

export default ConfirmationPage;