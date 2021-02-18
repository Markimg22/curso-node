/** Import Module
 * 
 */

const { Pessoa, firstName } = require('./module_1');
const axios = require('axios');

console.log(firstName);
console.log(new Pessoa('Marcos'));

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
  .then(res => console.log(res.data))
  .catch(e => console.log('Error:', e));