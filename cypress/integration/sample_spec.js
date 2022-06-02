describe('My First Test', function() {
    it("Visits the kitchen sink.", function () {
       cy.visit('https://example.cypress.io')
        // ARRANGE - setup initial app state.
         // visit a web page.
         // query for an element.
        // ACT - Take an action.
         //- interact with that element
        // ASSERT - make an assertion.
          // make an assertion about page content.
        cy.pause();
    })
    it("Find an element.", function () {
      cy.contains('type')
    })
    it('Clcik an element', function () {
        cy.contains('type').click()
    })
    it('Go to commands url', function () {
        cy.url()
        .should('include', '/commands/actions')
    })
    it('Check the email', function () {
        cy.get('.action-email')
        .type('fake@email.com')
        .should('have.value', 'fake@email.com')
    })
    });
