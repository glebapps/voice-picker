describe('Home', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Save voice to favorites', () => {
    cy.get('[data-test-id="favorites"]').children().should('have.length', 0)
    cy.get('#8bits').trigger('hover')
    cy.get('#8bits').children('#8bits_fav').click()
    cy.get('[data-test-id="favorites"]').children().should('have.length', 1)
  })
})
