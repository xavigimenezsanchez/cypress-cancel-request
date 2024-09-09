describe("empty spec", () => {
  it("first test", () => {
    cy.visit("https://example.cypress.io");
    cy.get(":nth-child(2) > ul > :nth-child(5)");
  });
  it("second test", () => {
    cy.visit("https://example.cypress.io");
    console.log("second test");
    cy.get(":nth-child(2) > ul > :nth-child(5)");
  });
});
