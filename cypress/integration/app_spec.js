// visit localhost
// find an element
// click an element

describe("Our Second Test", function() {
    it("Visits local world domination host", function () {
      cy.visit("http://localhost:3000")
    cy.pause();})
    
    // it("Find element on page", function () {
    //   cy.get('#job-input:contains("what else?")').should('have.length', 10)
    //  })
    it('Find element on page', function () {
      cy.get('#plan-todos > :nth-child(2)')
    })
    it('Click element on page', function () {
      cy.get('#plan-todos > :nth-child(2)').click()
    })
    it('Check the text of the element', function () {
      cy.get('h1')
      .should('Plan to take over the world')
  })
})

