///<reference types="cypress"/>

import { validaHomePage } from "../../../support/pages/Home/validaHome";
const ValidaHomePage = new validaHomePage();

describe("Dado que o usuario esta na Home", () => {
  beforeEach(() => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.visit("/");
  });
  it("Então valido que consigo me cadastrar na MedCof Academy", () => {
    ValidaHomePage.validarPaginaInicialCarregada();
  });
});
