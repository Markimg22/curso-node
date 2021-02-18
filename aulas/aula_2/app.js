/**
 * Importação anônima
 */

const Dog = require('./mod');


// console.log(sum(2, 3));

const litleDog = new Dog('bilu');
litleDog.latir();

/**
 * Variáveis importantes
 */

console.log(__dirname);   // caminhoo absoluto do diretório atual
console.log(__filename);  // caminho absoluto do arquivo atual

// path

const path = require('path');

console.log(path.resolve(__dirname, '..', 'aula_1', 'app.js' ));