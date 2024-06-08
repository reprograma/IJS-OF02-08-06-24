const { MAX_HORAS_POR_PACOTE } = require('../constantes/constantes');

const calcularPacote = (totalDeHorasPorProjeto) => Object.entries(MAX_HORAS_POR_PACOTE)
  .find(([key, value]) => value > totalDeHorasPorProjeto
)[0];
// modificando para funcionar para maiores de 200
// const calcularPacoteV2 = (totalDeHorasPorProjeto) => {
//   if (totalDeHorasPorProjeto > 200) {
//     return 'pacote_premium';
//   }
  
//   const encontrado = Object.entries(MAX_HORAS_POR_PACOTE)
//     .find(([key, value]) => value > totalDeHorasPorProjeto);
  
//   return encontrado ? encontrado[0] : 'pacote não encontrado';
// };


exports.calcularPacote = calcularPacote;
