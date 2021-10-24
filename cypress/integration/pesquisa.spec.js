/// <reference types="cypress" />

describe('Pesquisa', () => {
    it("Deve buscar o site", () => {
        cy.visit("https://www.google.com/");
    });
    it("Deve digitar no campo de pesquisa", () => {
        cy.get('.gLFyf').type("Notebook Dell Alienware X17 R1 AW17-X17R1-M20S 17.3 FHD 11a Ger Intel Core");
    });
    it("Deve realizar a pesquisa", () => {
        cy.get('.FPdoLc > center > .gNO89b').click();
    });
    it("Deve clicar em 'shopping' para realizar verificação de preços no mercado", () => {
        cy.get('.MUFPAc > :nth-child(2) > a').click();
    });
})