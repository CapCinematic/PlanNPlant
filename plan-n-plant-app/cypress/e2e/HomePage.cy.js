describe('Plan N Plant App', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://perenual.com/api/species-list?key=sk-9XOH64ced33198bb31777&watering=minimum&indoor', { fixture: 'HomePage.json' })
    cy.visit('http://localhost:3000/')
  })

  it('displays a list of plants on page load', () => {
    cy.get('.plant-card').should('have.length', 2)
    cy.get("p").should("contain", "Snake Plant");
    cy.get("p").should("contain", "Low");
    cy.get("p").should("contain", "Low");
    cy.get("p").should("contain", "Spider Plant");
    cy.get("p").should("contain", "Medium");
    cy.get("p").should("contain", "Low", "Medium");
  })

  it('displays an error message when the API returns an error', () => {
    cy.intercept('GET', 'https://perenual.com/api/species-list?key=sk-9XOH64ced33198bb31777&watering=minimum&indoor', { statusCode: 500 });
    cy.visit('http://localhost:3000/*');
    cy.get('.error-message p').should('contain', 'Ooops, please try to reload or try again later!');
  });

})