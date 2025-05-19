
beforeEach(()=>{
    //runs once before all tests in this block
    cy.fixture('fixtureData').then(function(data)
    {
        this.data=data
  
    })

})