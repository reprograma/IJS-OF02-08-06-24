const { MAX_HORAS_POR_PACOTE } = require('../constantes/constantes');

const calcularPacote = (totalDeHorasPorProjeto) => {
  if (totalDeHorasPorProjeto <= 0 || totalDeHorasPorProjeto > MAX_HORAS_POR_PACOTE.pacote_premium) {
    return undefined
  }
  
  return Object.entries(MAX_HORAS_POR_PACOTE)
    .find(([key, value]) => totalDeHorasPorProjeto <= value)[0];
};

exports.calcularPacote = calcularPacote;