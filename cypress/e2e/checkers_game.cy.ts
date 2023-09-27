describe('checkers game challenge', () => {
  it('nagivates to Checkers Game Website', () => {
    cy.visit('https://www.gamesforthebrain.com/game/checkers/')
    cy.get('[id="message"]').should('have.text', 'Select an orange piece to move.')
  })

  it('makes the first move', () => {
    cy.get('[name="space22"]').click()
    cy.get('[name="space33"]').click()
    cy.get('[id="message"]').should('have.text', 'Make a move.')
    cy.wait(2000)
  })


  it('makes the second move', () => {
    cy.get('[name="space42"]').click()
    cy.get('[name="space53"]').click()
    cy.get('[id="message"]').should('have.text', 'Make a move.')
    cy.wait(2000)

  })

  it('makes the third move', () => {
    cy.get('[name="space62"]').click()
    cy.get('[name="space73"]').click()
    cy.get('[id="message"]').should('have.text', 'Make a move.')
    cy.wait(2000)

  })

  it('makes the fourth move and captures a blue piece', () => {
    cy.get('[name="space31"]').click()
    cy.get('[name="space53"]').click()
    cy.get('[id="message"]').should('have.text', 'Make a move.')
    cy.wait(2000)

  })

  it('makes the fifth move', () => {
    cy.get('[name="space51"]').click()
    cy.get('[name="space42"]').click()
    cy.get('[id="message"]').should('have.text', 'Make a move.')
    cy.wait(2000)

  })

  it('restarts the game', () => {
    cy.contains("Restart").click()
    cy.get('[id="message"]').should('have.text', 'Select an orange piece to move.')

  })

})