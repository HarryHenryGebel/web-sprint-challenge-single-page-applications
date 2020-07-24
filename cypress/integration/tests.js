describe('Name takes input', function () {
  //Arrange
  it('Visits a new site', function() {
    // Act
    cy.visit("/pizza");
    cy.get("#name-text").type("Harry");
    cy.get("#name-text").should("have.value", "Harry");
  });
});

describe('Can click multiple toppings', function () {
  //Arrange
  it('Visits a new site', function() {
    // Act
    cy.visit("/pizza");
    cy.get("#pepperoni-check").check();
    cy.get("#sausage-check").check();
  });
});

describe('Can submit form', function () {
  //Arrange
  it('Visits a new site', function() {
    // Act
    cy.visit("/pizza");
    cy.get("#add-order-button").click();
  });
});
