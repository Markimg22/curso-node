/**
 * Escrevendo arquivos
 */

const fs = require('fs').promises;

module.exports = (filePath, datas) => {
  fs.writeFile(filePath, datas, { flag: 'w' });
};
