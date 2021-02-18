/**
 * Parâmetros de URL:
 * Exemplo => https://meusite.com.br/profiles/1234?nome=marcos&idade=19
 *
 * Parêmtro de BODY(Corpo da Requisição):
 * Usado para coisas inacessíveis, por exemplo, formulários
 */

const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true })); // habilita o 'express' para tratar o body das requisições

app.get('/', (req, res) => {
  res.send(`
    <form action="/" method="POST">
      Nome: <input type="text" name="name" />
      <button>Enviar</button>
    </form>
  `);
});

/**
 * Params:
 * Rota '/testes' tem um parâmetro opcional chamado 'id_user'
 * Exemplo: '/testes/12345' => req.params === { id_user: 12345 }
 *
 * Query String:
 * Exemplo: '/testes/?nome=Luiz&idade=19' => req.query === { nome: 'Luiz', idade: 19 }
 */
app.get('/testes/:id_user?/:parametro?', (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.send(req.params);
});

/**
 * Body:
 * recebe requisições do POST ou PUT
 */
app.post('/', (req, res) => {
  console.log(req.body); // { name: '' }
  res.send(`
    <h1>Bem-Vindo(a)</h1>
    <h2>${req.body.name}</h2>
  `);
});

app.listen(3000, () => {
  console.log('Server starting in http://localhost:3000/');
});
