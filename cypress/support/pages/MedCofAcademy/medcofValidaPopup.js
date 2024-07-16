import { ELEMENTS } from "./elements.js";
import "cypress-real-events"
export class MedCofAcademyPopup {
  validapopup() {
    cy.url().should("include", "/simulado-multimidia-unifesp/");
    cy.get(ELEMENTS.btnCriarConta).click();
    cy.wait(1500)
    cy.url().should("include", "/simulado-multimidia-unifesp/");

  }
}
