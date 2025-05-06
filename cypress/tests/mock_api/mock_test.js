describe('Mock api call', function () {

    it('First mock test to mock responsee', function () {


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

            }).as('bookresponse')
        cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
        cy.get("button[class='btn btn-primary']").click()
        cy.wait('@bookresponse').then(({ request, response }) => {
            cy.get('tr').should('have.length', response.body.length + 1)

        })
        cy.get('p').should('have.text', 'Oops only 1 Book available')

    });


    it("Mock request", function () {
        cy.visit("https://rahulshettyacademy.com/angularAppdemo/");

        cy.intercept('GET', 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
            (req) => {
                req.url = "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=dfgdfgdfgdfg"

                req.continue((res)=>{
                    expect(res).to.not.equal(200)
            })
    }).as("unauthorizedUrl")

        cy.get("button[class='btn btn-primary']").click()
        // cy.wait('@unauthorizedUrl').its('response.statusCode')
        // .should('eq',200);
        cy.wait('@unauthorizedUrl').then((interception) => {
            // ✅ Assert that the URL was changed
            expect(interception.request.url).to.include('AuthorName=shetty');
          
            // ✅ Print it
            // console.log(interception.response.body);
          });

    });
})