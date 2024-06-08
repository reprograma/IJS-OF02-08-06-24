const {
  HORAS_POR_DIA,
  DIAS_UTEIS_NO_MES
} = require('../constantes/constantes')

const calcularValorPorHora = (rendaMensal) => {
  //converte valor para number
  const renda = Number(rendaMensal);
  if (isNaN(renda)) {
    throw new TypeError('A renda mensal deve ser um número.');
  }
  const horasTrabalhadasPorMes = (HORAS_POR_DIA * DIAS_UTEIS_NO_MES);
  const valorPorHora = rendaMensal / horasTrabalhadasPorMes;

  return Math.ceil(valorPorHora);
};

exports.calcularValorPorHora = calcularValorPorHora;