/** Module Exports
 * 
 */

const firstName = 'Marcos';
const lastName = 'Campos';

const showFullName = () => console.log(firstName, lastName);

module.exports.firstName = firstName;
module.exports.lastName = lastName;
module.exports.showFullName = showFullName;

exports.firstName = firstName;  // um atalho

this.qualquerCoisa = 'Qualquer coisa';


class Pessoa {
  constructor(name) {
    this.name = name;
  }
}

// Sobrescreve o objeto inteiro
module.exports = {
  firstName, lastName, Pessoa
};