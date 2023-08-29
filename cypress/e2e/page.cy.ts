describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should contain an h1 with Products", () => {
    cy.get("h1").contains("Products");
  });

  it("should show products", () => {
    cy.get("[data-testid=product-card]").should("have.length", 20);
  });

  it("should render the search input", () => {
    cy.get("input").should("have.attr", "placeholder", "Search Products");
  });

  it("should search products", () => {
    cy.get("[data-testid=search-input]").type("test");
    cy.get("[data-testid=product-card]").should("have.length", 1);
  });

  it("should show loading indicator when searching", () => {
    cy.get("[data-testid=search-input]").type("test");
    cy.get("[data-testid=loading-spinner]").should("have.length", 1);
  });
});
