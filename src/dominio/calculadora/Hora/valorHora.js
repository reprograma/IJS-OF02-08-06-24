const {
  HORAS_POR_DIA,
  DIAS_UTEIS_NO_MES
} = require('../constantes/constantes')

const calcularValorPorHora = (rendaMensal) => {

  if(isNaN(rendaMensal)) {
    throw new Error('valor mensal dever ser um numero')
  }

  if(rendaMensal < 0) {
    throw new Error('valor mensal deve ser maior que zero')
  }

  const horasTrabalhadasPorMes = (HORAS_POR_DIA * DIAS_UTEIS_NO_MES);
  const valorPorHora = rendaMensal / horasTrabalhadasPorMes;

  return Math.ceil(valorPorHora);
};

exports.calcularValorPorHora = calcularValorPorHora;