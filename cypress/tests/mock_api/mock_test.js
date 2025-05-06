describe('Mock api call', function () {

    it('First mock test', function () {


        cy.intercept({
            method: 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        },

            {
                statusCode: 200,
                body: [{
                    "book_name": "RestAssured with Java",
                    "isbn": "RSU",
                    "aisle": "2301"
                }]

            }).as('bookretrievals')
        cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
        cy.get("button[class='btn btn-primary']").click()
        cy.wait('@bookretrievals').then(({ request, response }) => {
            cy.get('tr').should('have.length', response.body.length + 1)

        })
        cy.get('p').should('have.text', 'Oops only 1 Book available')

    })
})