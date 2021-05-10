describe('Home', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Save/Remove voice to/from favorites', () => {
    cy.get('[data-test-id="favorites"]').children().should('have.length', 0)
    cy.get('#8bits').trigger('hover')
    cy.get('#8bits').children('#8bits_fav').click()
    cy.get('[data-test-id="favorites"]').children().should('have.length', 1)
    cy.get('#8bits').trigger('hover')
    cy.get('#8bits').children('#8bits_fav').click()
    cy.get('[data-test-id="favorites"]').children().should('have.length', 0)
  })

  it('Filters voice by tag', () => {
    cy.get('[data-test-id="voices"]').children().should('have.length', 89)
    cy.get('#filter').children('button').click()
    cy.contains('Human').click()
    cy.get('[data-test-id="voices"]').children().should('have.length', 9)
  })

  it('Search by name', () => {
    cy.get('[data-test-id="voices"]').children().should('have.length', 89)
    cy.get('input#search').type('man')
    cy.get('[data-test-id="voices"]').children().should('have.length', 5)
  })
})
