/// <reference types="cypress" />
import neatCSV from 'neat-csv';
let productName

describe("Cookies and local storage test", function () {
    before(() => {
        cy.LoginAPI().then(function () {
            cy.visit("https://rahulshettyacademy.com/client",
                {
                    onBeforeLoad: function (window) {
                        window.localStorage.setItem(
                            'token',
                            Cypress.env('token'))
                    }
                });
        });
    })
    it("Test1- place order", function () {

        cy.get(".card-body b").eq(1).then(function (ele) {
            productName = ele.text();
        })
        cy.get(".card-body button:last-of-type").eq(1).click();
        cy.get("[routerlink*='cart']").click();
        cy.contains("Checkout").click();
        cy.get("[placeholder*='Country']").type("ind")
        cy.get('.ta-results button').each(($e1, index, $list) => {

            if ($e1.text() === " India") {
                cy.wrap($e1).click()
            }
        })
        cy.get(".action__submit").click();
        cy.wait(2000)
        cy.get(".order-summary button").eq(0).click();
    
    });

    it('Test2-place order and Download CSV file', () => {
        cy.readFile(Cypress.config("fileServerFolder")+"/cypress/downloads/order-invoice_anshika.csv")
            .then(async (text) => {
                const csv = await neatCSV(text)
                console.log(csv)
                const actualProductCSV = csv[0]["Product Name"]
                expect(productName).to.equal(actualProductCSV)

            });
    });
})