import { ELEMENTOS as elemento } from "./elementos";
import dadosLogin from "../../../fixtures/dadosLogin.json";

class Validacoes {
  validarLoginComSucesso() {
    cy.get(elemento.textoLoginSucesso).should("be.visible");
    cy.screenshot();
  }

  validarLoginInvalido() {
    cy.get(elemento.modal).should("be.visible");
    cy.get(elemento.textoModal).should(
      "be.visible",
      "Usuário ou senha inválido.\nTente novamente ou verifique suas informações!"
    );
    cy.screenshot();
  }

  validarMensagemCampoVazio() {
    cy.get(elemento.mensagemCampoObrigatorio)
      .should("be.visible")
      .and("contain.text", "É campo obrigatório");
    cy.screenshot();
  }

  validarModalFechado() {
    cy.get(elemento.modal).should("not.exist");
    cy.screenshot();
  }

  validarVisualizacaoSenha() {
    cy.get(elemento.textoSenhaVisivel)
      .should("be.visible")
      .and("have.value", dadosLogin.senha);
    cy.screenshot();
  }

  validarSenhaOculta() {
    cy.get(elemento.textoSenhaEscondido).should("be.visible");
    cy.screenshot();
  }
}

export default new Validacoes();
