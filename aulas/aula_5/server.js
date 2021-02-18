/**
 * Criando servidor Web utilizando o 'express'
 * O express ajuda a trabalhar nas rotas de nossas aplicações
 *
 * // https://meusite.com.br/ <- GET -> Entregue a página '/'
 * // https://meusite.com.br/about <- GET -> Entregue a página '/about'
 *
 *
 * Algumas operações na API:
 *
 * CRUD => CREATE | READ | UPDATE | DELETE
 *         POST   | GET  | PUT    | DELETE
 */

const express = require('express');
const app = express();

/**
 * Método GET:
 *
 * requisição(req) => referente ao que o usuário pediu.
 * resposta(res) => referente ao que vou mandar para o servidor.
 */
app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>');
});

app.get('/about', (req, res) => {
  res.send('<h1>About</h1>');
});

app.get('/form', (req, res) => {
  res.send(`
    <form action="/form" method="POST">
      NOME: <input name="name" type="text" />
      <button>Enviar</button>
    </form>
  `);
});

/**
 * Método POST
 */

app.post('/form', (req, res) => {
  res.send('Recebi o formulário');
});

/**
 * Portas:
 *
 * Qualquer requisição que chegar em tal porta, o servidor deve enviar uma resposta.
 * Uma porta é referente a um processo do seu servidor.
 */
app.listen(3000, () => {
  console.log('Server starting in http://localhost:3000/');
});
