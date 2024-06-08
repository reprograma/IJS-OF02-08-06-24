const { MAX_HORAS_POR_PACOTE } = require('../constantes/constantes');

const calcularPacote = (totalDeHorasPorProjeto) => {

  if(totalDeHorasPorProjeto > 200) {
    throw new Error('Valor enviado é maior que o máximo permitido')
  }

  return Object.entries(MAX_HORAS_POR_PACOTE)
  .find(([key, value]) => value >= totalDeHorasPorProjeto
)[0];
}

exports.calcularPacote = calcularPacote;