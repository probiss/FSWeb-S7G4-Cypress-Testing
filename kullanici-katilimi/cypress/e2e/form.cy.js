describe('template spec', () => {
  beforeEach(() =>{
    cy.visit('http://localhost:3000')
  });

  const getInput = (type) => cy.get(`[data-cy=test-${type}]`);

  it("passes", () => {
    expect(true).to.equal(true);
  })

 

  it("submits form successfull", () => {
    getInput('name')
      .should("have.value", "")
      .type("cihat bulut")
      .should("have.value", "cihat bulut");
      
    getInput('email')
      .should('have.value', '')
      .type('bulut.cihad@gmail.com')
      .should('have.value', 'bulut.cihad@gmail.com');

    getInput('password')
      .should("have.value", "")
      .type("12345")
      .should("have.value", "12345");

    getInput('checkbox')
    .should('be.checked');

    getInput('button')
    .click();
  })
});