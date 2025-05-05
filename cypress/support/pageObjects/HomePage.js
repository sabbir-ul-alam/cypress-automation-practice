import ProducPage from '../pageObjects/ProductPage'

class HomePage{
    
    goTo(url){
        cy.visit(url);
        
    }

    login(userName, password){
        cy.get("#usernamee").type(userName);
        cy.get("#password").type(password);
        cy.contains("Sign In").click();
        return new ProducPage();
    }
}