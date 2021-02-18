/**
 * Middleware => são funções que pode ser chamada no caminho de uma resposta ao cliente.
 * Com isso podemos fazer uma sequência de ações dependendo de cada de requisição.
 */

module.exports = (req, res, next) => {
  console.log('Passei no middleware global');
  next(); // avança para a próxima função
};
