describe("My Node.js Application", () => {
    it("should display the homepage", () => {
        // Visit the homepage URL of your Node.js application
        cy.visit("http://localhost:3021");

        // Verify that the homepage contains certain elements
        cy.contains("Count");
        cy.get("button").should("have.length", 1);
    });

    it("should increment count when button is clicked", () => {
        // Visit the homepage URL
        cy.visit("http://localhost:3021");

        // Click the button to increment count
        cy.get("button").click();

        // Verify that the count has been incremented
        cy.get("#count").should("have.text", "1");
    });
});
