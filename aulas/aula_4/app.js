/**
 * Usando métodos 'read' e 'write'
 * Manipulando arquivos JSON
 */

const path = require('path');
const write = require('./modules/write');
const read = require('./modules/read');

const peoples = [
  { name: 'Marcos' },
  { name: 'Guilherme' },
  { name: 'Pedro' },
  { name: 'João' },
  { name: 'Heitor' },
  { name: 'André' },
];

const filePath = path.resolve(__dirname, 'teste.json');
const json = JSON.stringify(peoples, '', 2);

write(filePath, json);

async function readFile(filePath) {
  const datas = await read(filePath);
  renderDatas(datas);
}

function renderDatas(datas) {
  datas = JSON.parse(datas);
  datas.forEach((value) => console.log(value));
}

readFile(filePath);
