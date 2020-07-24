describe('Name takes input', function () {
  //Arrange
  it('Visits a new site', function() {
    // Act
    cy.visit("/pizza");
    cy.get("[data-cy=addButton]").click();
    cy.get("#name-field").type(defaultUserName);
    cy.get("#name-field").should("have.value", defaultUserName);
  });
});
