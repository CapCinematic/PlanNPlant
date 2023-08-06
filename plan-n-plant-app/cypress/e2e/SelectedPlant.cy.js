describe("SelectedPlant component", () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://perenual.com/api/species/details/1?key=sk-9XOH64ced33198bb31777', { fixture: 'SelectedPlant.json' })
    cy.visit("http://localhost:3000/1");
  });

  it("displays the plant's common name, scientific name,displays the plant's description ", () => {
    cy.get("h2").should("contain", "Snake Plant");
    cy.get("p").should("contain", "Sansevieria trifasciata");
    cy.get("p").should("contain", "The snake plant is a popular indoor plant");
    cy.get("p").should("contain", "Cycle: Perennial")
  });

  it("should be able to add a journal entry", () => {
    cy.get(".journal-open").click()
    cy.get("form").should("exist")
    cy.get("label").should("exist")
    cy.get('.submit-button').click()
    cy.get("li").should("exist")
  })
});