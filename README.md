<h1 align="center">
Estudo de Cypress no site Bug Bank com Page Objects
</h1>

<div align="center">
<img width="800px" alt="Site para testes automatizados CuraHealthcare" src="https://i.imgur.com/Tmx5hQj.png" />
</div>

<h1></h1>


#### Como executar o projeto:


```diff 
• git clone 
• cd bugbankCypressPOM
• npm install
• npm run test
```

#### Cenários de login usados para realização dos testes no cypress:


```diff  

• Validar login bem-sucedido.
Dado que o usuário tenha cadastro
E insira os dados válidos
Quando clicar em 'acessar'
Então deve redirecionar para a home.

• Validar falha ao tentar realizar login.
Dado que o usuário tenha cadastro
E insira nome ou senha inválidos
Quando clicar 'acessar'
Então deve abrir o modal
E aparecer mensagem "Usuário ou senha inválido. Tente novamente ou verifique suas informações!".

• Validar campos vazios.
Dado que o usário esteja tentando realizar o login
E não insira dados no <campo>
Quando clicar em 'acessar'
Então deve aparecer a mensagem 'É campo obrigatório'.

• Validar botão "fechar" no modal em caso de falha de login
Dado que o usuário tenha preenchido os campos com dados inválidos
E tenha sido aberto o modal de erro
Quando clicar 'fechar'
Então deve desaparecer o modal.

• Validar botão "x" no modal em caso de falha de login
Dado que o usuário tenha preenchido os campos com dados inválidos
E tenha sido aberto o modal de erro
Quando clicar no "x"
Então deve desaparecer o modal.

• Validar visualização de senha oculta.
Dado que o usário insira uma senha no login
E ela esteja oculta
Quando clicar no icone de "olhinho"
Então deve aparecer a senha.

• Validar ocultar senha.
Dado que o usário insira uma senha no login
E ela esteja visivel
Quando clicar no icone de "olhinho"
Então deve ocultar a senha.

```

<br>
Site utilizado: https://bugbank.netlify.app/#
<h1>


