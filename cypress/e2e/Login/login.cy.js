/// <reference types="cypress" />

import login from "../../support/pages/login";
import cadastro from "../../support/pages/cadastro";
const elemento = require("../../support/pages/login/elements").ELEMENTS;

describe("Página de Login", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  /*  Página -> ações + elementos **/

  it("C01 - Validar login bem-sucedido.", () => {
    cadastro.realizarCadastro();
    login.preencherLogin(Cypress.env("email"), Cypress.env("senha"));
    login.clicarBotaoAcessar();
  });
  
  it("C02 - Validar falha ao tentar realizar login.", () => {
    login.preencherLogin("teste@teste.com", "senha123");
    login.clicarBotaoAcessar();
    cy.get(elemento.modal).should("be.visible");
    cy.get(elemento.textoModal).should(
      "be.visible",
      "Usuário ou senha inválido.\nTente novamente ou verifique suas informações!"
    );
  });
  
  context("C03 - Validar campos vazios.", () => {
    it("Campo e-mail vazio", () => {
      login.preencherSenha(Cypress.env("senha"));
      login.clicarBotaoAcessar();
  
      cy.get(elemento.mensagemCampoObrigatorio)
        .should("be.visible")
        .and("contain.text", "É campo obrigatório");
    });
  
    it("Validar campos vazios.", () => {
      login.preencherEmail("teste@teste.com");
      login.clicarBotaoAcessar();
  
      cy.get(elemento.mensagemCampoObrigatorio)
        .should("be.visible")
        .and("contain.text", "É campo obrigatório");
    });
  });
  
  it(`C04 - Validar botão "fechar" no modal em caso de falha de login.`, () => {
    login.preencherLogin("joao@hotmail.com", "senha123");
    login.clicarBotaoAcessar();
    login.clicarBotaoFecharModal();
    cy.get(elemento.modal).should("not.exist");
  });
  
  it(`C05 - Validar botão "x" no modal em caso de falha de login.`, () => {
    login.preencherLogin("teste@teste.com", "senha123");
    login.clicarBotaoAcessar();
    login.clicarBotaoXModal();
    cy.get(elemento.modal).should("not.exist");
  });
  
  it("C06 - Validar visualização de senha oculta.", () => {
    login.preencherSenha("senha");
    login.clicarBotaoOlhinho();
  
    cy.get(elemento.textoSenhaVisivel)
      .should("be.visible")
      .and("have.value", "senha");
  });
  
  it("C07 - Validar ocultar senha.", () => {
    login.preencherSenha(Cypress.env("senha"));
    cy.get(elemento.textoSenhaEscondido).should("be.visible");
  });

  
});
