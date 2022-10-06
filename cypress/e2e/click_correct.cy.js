describe("Clicking is easy...", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.get("#click", { timeout: 20000 }).click();
  });

  it("the dialog should disapear when Agree is clicked", () => {
    cy.get(".dialog").should("be.visible");
    cy.get("#agree").click();
    cy.get(".dialog").should("not.exist");
  });
});
