/// <reference types="cypress" />

import login from "../../support/pages/login";
import cadastro from "../../support/pages/cadastro";
const elemento = require("../../support/pages/login/elements").ELEMENTS


describe("Página de Login", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  /*  Página -> ações + elementos **/

  it("C01 - Sucesso ao fazer login", () => {
   cadastro.realizarCadastro()
   login.preencherLogin(Cypress.env('email'), Cypress.env('senha'))
   login.clicarBotaoAcessar()
  });

  it("C02 - Falha ao fazer login", () => {
    login.preencherLogin('teste@teste.com', 'senha123')
    login.clicarBotaoAcessar()
    expect(cy.get(elemento.modal).should('be.visible'))
    expect(cy.get(elemento.textoModal).should('be.visible').and('have.text', `Usuário ou senha inválido.\nTente novamente ou verifique suas informações!`))
  })

  context("C03 - Campo do login vázio", () => {
   it('Campo e-mail vazio', () => {
    login.preencherSenha(Cypress.env('senha'))
    login.clicarBotaoAcessar()

    expect(
      cy.get(elemento.mensagemCampoObrigatorio)
      .should('be.visible')
      .and('contain.text', 'É campo obrigatório')
    )
   })

   it('Campo senha vazio', () => {
    login.preencherEmail('teste@teste.com')
    login.clicarBotaoAcessar()

    expect(
      cy.get(elemento.mensagemCampoObrigatorio)
      .should('be.visible')
      .and('contain.text', 'É campo obrigatório')
    )
   })

  })

  it(`C04 - Botão "fechar" no modal em caso de falha de login`, () => {
    login.preencherLogin('joao@hotmail.com', 'senha123')
    login.clicarBotaoAcessar()
    login.clicarBotaoFecharModal()
    cy.get(elemento.modal).should('not.exist')
  })

  it(`C05 - Botão "x" no modal em caso de falha de login`, () => {
    login.preencherLogin('teste@teste.com', 'senha123')
    login.clicarBotaoAcessar()
    login.clicarBotaoXModal()
    cy.get(elemento.modal).should('not.exist')
  })

  it(`C06 - Visualizar a senha`, () => {
   login.preencherSenha('senha')
   login.clicarBotaoOlhinho()

    expect(
      cy.get(elemento.textoSenhaVisivel)
      .should('be.visible')
      .and('have.value', 'senha' )
      )
  })

  it(`C07 - Esconder senha`, () => {
    login.preencherSenha(Cypress.env('senha'))
    expect(
      cy.get(elemento.textoSenhaEscondido)
      .should('be.visible')
      )
  })
});
