///<reference types="cypress"/>

import { HomePage } from "../../../support/pages/Home/homeAction";
import { MedCofAcademy } from "../../../support/pages/MedCofAcademy/medcofAction";
const homePage = new HomePage();
const medcofAcademy = new MedCofAcademy();

describe("Dado que o usuario esta na Home", () => {
  beforeEach(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visit("/");
  });
  it("Então valido que consigo me cadastrar na MedCof Academy", () => {
    const nome = "Paulo Antônio";
    const email = "paulo.antonio@mailinator.com";
    const celular = "11999999999";
    homePage.validarPaginaInicialCarregada();
    homePage.clicaLinkMdCofAcademy();
    medcofAcademy.validaEDirecionaParaAcessarConteudo(nome, email, celular);
  });
});
