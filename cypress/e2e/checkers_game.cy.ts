describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.gamesforthebrain.com/game/checkers/')
    expect (true).to.equal(true)
  })
})