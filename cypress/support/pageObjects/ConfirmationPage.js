class ConfirmationPage{
    purchase(){
        cy.get('#country').type('Bangladesh');
        cy.get('.suggestions ul li a').click();
        cy.get('#checkbox2').check();
        cy.contains('input','Purchase').click();


    }

}