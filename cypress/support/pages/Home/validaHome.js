import { ELEMENTS } from "./elements.js";


export class validaHomePage {
  validarPaginaInicialCarregada() {
    cy.get(ELEMENTS.iconesMenu).should("be.visible");
    cy.get(ELEMENTS.sectionAprovados).should("be.visible");
    cy.get(ELEMENTS.sectionCursos).should("be.visible");
    cy.get(ELEMENTS.menuConteudos).should("be.visible");
  }
}
