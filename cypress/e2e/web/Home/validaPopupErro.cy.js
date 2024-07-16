///<reference types="cypress"/>

import { HomePage } from "../../../support/pages/Home/homeAction";
import { MedCofAcademyPopup } from "../../../support/pages/MedCofAcademy/medcofValidaPopup";
const homePage = new HomePage();
const medcofacademypopup = new MedCofAcademyPopup

describe("Dado que o usuario esta na Home", () => {
  beforeEach(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visit("/");
  });
  it("Então valido que consigo me cadastrar na MedCof Academy", () => {
    homePage.validarPaginaInicialCarregada();
    homePage.clicaLinkMdCofAcademy();
    medcofacademypopup.validapopup();
  });
});
