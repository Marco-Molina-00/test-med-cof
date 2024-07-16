import { ELEMENTS } from "./elements.js";

export class Academy {
  criaCadastro() {
    cy.url().should("include", "/simulado-multimidia-unifesp/");
//    cy.get(ELEMENTS.inputEmail).type(email);
//    cy.get(ELEMENTS.inputSenha).type(senha);
    cy.get(ELEMENTS.btnCriarConta).click();
  }
}
