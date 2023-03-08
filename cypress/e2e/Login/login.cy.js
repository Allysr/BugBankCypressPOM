/// <reference types="cypress" />

describe("Página de Login", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  // it.only("C01 - Sucesso ao fazer login", () => {
  // });

  it("C02 - Falha ao fazer login", () => {
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default').type('teste@teste.com')   
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('teste')
    cy.get('.otUnI').click()

    expect(cy.get('.styles__ContainerContent-sc-8zteav-1').should('be.visible'))
    expect(cy.get('#modalText').should('be.visible').and('have.text', `Usuário ou senha inválido.\nTente novamente ou verifique suas informações!`))
  })

  context("C03 - Campo do login vázio", () => {
   it('Campo e-mail vazio', () => {
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('teste')
    cy.get('.otUnI').click()

    expect(
      cy.get('.kOeYBn > .input__warging')
      .should('be.visible')
      .and('contain.text', 'É campo obrigatório')
    )
   })

   it('Campo senha vazio', () => {
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default').type('teste@teste.com')   
    cy.get('.otUnI').click()

    expect(
      cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__warging')
      .should('be.visible')
      .and('contain.text', 'É campo obrigatório')
    )
   })

  })

  it(`C04 - Botão "fechar" no modal em caso de falha de login`, () => {
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default').type('teste@teste.com')   
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('teste')
    cy.get('.otUnI').click()
    cy.get('#btnCloseModal').click()
    cy.get('.styles__ContainerContent-sc-8zteav-1').should('not.exist')
  })

  it(`C05 - Botão "x" no modal em caso de falha de login`, () => {
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default').type('teste@teste.com')   
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('teste')
    cy.get('.otUnI').click()
    cy.get('.styles__ContainerCloseButton-sc-8zteav-2 > a').click()
    cy.get('.styles__ContainerContent-sc-8zteav-1').should('not.exist')
  })

  it(`C06 - Visualizar a senha`, () => {
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('teste')
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .login__eye').click();
    expect(
      cy.get('input[type="text"]')
      .should('be.visible')
      .and('have.value', 'teste' )
      )
  })

  it(`C07 - Esconder senha`, () => {
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .login__eye').click();
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('teste')
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .login__eye').click();
    expect(
      cy.get('input[type="password"]')
      .should('be.visible')
      )
  })
});
