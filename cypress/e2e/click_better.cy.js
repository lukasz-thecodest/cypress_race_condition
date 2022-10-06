describe("Clicking is easy...", () => {
  it("the dialog should disapear when Agree is clicked", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#click").click();
    cy.get(".dialog").should("be.visible").wait(500);
    cy.get("#agree").click();
    cy.get(".dialog").should("not.exist");
  });
});
