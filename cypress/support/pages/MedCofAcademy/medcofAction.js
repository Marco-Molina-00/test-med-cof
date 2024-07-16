import { ELEMENTS } from "./elements.js";
import "cypress-real-events"
export class MedCofAcademy {
  validaEDirecionaParaAcessarConteudo(nome, email, celular) {
    cy.url().should("include", "/simulado-multimidia-unifesp/");
    cy.get(ELEMENTS.inputNome).type(nome);
    cy.get(ELEMENTS.inputEmail).type(email);
    cy.get(ELEMENTS.inputCelular).type(celular);
    cy.get(ELEMENTS.btnCriarConta).click();
    cy.wait(4000)
    cy.url({timeout:10000}).should("eq", "https://www.grupomedcof.com.br/simulado-multimidia-unifesp/");
    cy.wait(4000)
    cy.get('.elementor-progress-wrapper > .elementor-progress-bar', {timeout:10000}).realHover('mouse')
    cy.wait(4000)
    cy.get('.elementor-progress-wrapper > .elementor-progress-bar', {timeout:10000}).should('be.visible')

  }
}
