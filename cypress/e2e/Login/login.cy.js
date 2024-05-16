import login from "../../support/pages/login";
import cadastro from "../../support/pages/cadastro";
import dadosLogin from "../../fixtures/dadosLogin.json";
import loginValidacoes from "../../support/pages/login/validacoes";

describe("Página de Login", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  /*  Página -> ações + elementos **/

  it("C01 - Validar login bem-sucedido.", () => {
    cadastro.realizarCadastro();
    login.preencherLogin(dadosLogin.email, dadosLogin.senha);
    login.clicarBotaoAcessar();
    loginValidacoes.validarLoginComSucesso();
  });

  it("C02 - Validar falha ao tentar realizar login.", () => {
    login.preencherLogin(dadosLogin.emailInvalido, dadosLogin.senha);
    login.clicarBotaoAcessar();
    loginValidacoes.validarLoginInvalido();
  });

  context("C03 - Validar campos vazios.", () => {
    it("Campo e-mail vazio", () => {
      login.preencherSenha(dadosLogin.senha);
      login.clicarBotaoAcessar();
      loginValidacoes.validarMensagemCampoVazio();
    });

    it("Validar campos vazios.", () => {
      login.preencherEmail(dadosLogin.email);
      login.clicarBotaoAcessar();
      loginValidacoes.validarMensagemCampoVazio();
    });
  });

  it(`C04 - Validar botão "fechar" no modal em caso de falha de login.`, () => {
    login.preencherLogin(dadosLogin.email, dadosLogin.senha);
    login.clicarBotaoAcessar();
    login.clicarBotaoFecharModal();
    loginValidacoes.validarModalFechado();
  });

  it(`C05 - Validar botão "x" no modal em caso de falha de login.`, () => {
    login.preencherLogin(dadosLogin.email, dadosLogin.senha);
    login.clicarBotaoAcessar();
    login.clicarBotaoXModal();
    loginValidacoes.validarModalFechado();
  });

  it("C06 - Validar visualização de senha oculta.", () => {
    login.preencherSenha(dadosLogin.senha);
    login.clicarBotaoOlhinho();
    loginValidacoes.validarVisualizacaoSenha();
  });

  it("C07 - Validar ocultar senha.", () => {
    login.preencherSenha(dadosLogin.senha);
    loginValidacoes.validarSenhaOculta();
  });
});
