const { MAX_HORAS_POR_PACOTE } = require('../constantes/constantes');

const calcularPacote = (totalDeHorasPorProjeto) => {
  if (totalDeHorasPorProjeto <= MAX_HORAS_POR_PACOTE.pacote_basico) {
    return 'pacote_basico';
  } else if (totalDeHorasPorProjeto <= MAX_HORAS_POR_PACOTE.pacote_intermediario) {
    return 'pacote_intermediario';
  } else if (totalDeHorasPorProjeto <= MAX_HORAS_POR_PACOTE.pacote_premium) {
    return 'pacote_premium';
  } else {
    throw new Error('Total de horas do projeto excede o limite do pacote premium');
  }
};

exports.calcularPacote = calcularPacote;
