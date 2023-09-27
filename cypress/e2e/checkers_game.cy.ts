describe('checkers game challenge', () => {
  it('nagivates to Checkers Game Website', () => {
    cy.visit('https://www.gamesforthebrain.com/game/checkers/')
    cy.get('[id="message"]').invoke('text').then((text) => {
      cy.log(text)
    
      expect(text).to.equal("Select an orange piece to move.")
    })
  })
})