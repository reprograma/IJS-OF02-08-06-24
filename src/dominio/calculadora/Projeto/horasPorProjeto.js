const { HORAS_POR_FUNCIONALIDADE } = require('../constantes/constantes');
// adicionar o || 0 para quando passar uma funcionalidade retornar 0 em vez de NaN
const calcularHorasDeProjeto = (listaDeFuncionalidades) => (
  listaDeFuncionalidades
    .map(func => HORAS_POR_FUNCIONALIDADE[func] || 0)
    .reduce((sum, currentValue) => sum + currentValue, 0)
);

exports.calcularHorasDeProjeto = calcularHorasDeProjeto;