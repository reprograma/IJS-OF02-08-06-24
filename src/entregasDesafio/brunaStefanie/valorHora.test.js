const {calcularValorPorHora} = require('../../dominio/calculadora/Hora/valorHora');
const { DIAS_UTEIS_NO_MES, HORAS_POR_DIA } = require('../../dominio/calculadora/constantes/constantes');

describe('calcularValorPorHora', () => {
    test("calcular hora para renda 3000 reais", () => {
        const retorno = calcularValorPorHora(3000);
        const esperado = 18;
        expect(esperado).toBe(retorno);
        });
    test('calcular hora para renda 5000 reais', () => {
        const rendaMensal = 5000;
        const horasTrabalhadasPorMes = DIAS_UTEIS_NO_MES * HORAS_POR_DIA;
        const valorEsperado = Math.ceil(rendaMensal / horasTrabalhadasPorMes);
         expect(calcularValorPorHora(rendaMensal)).toBe(valorEsperado);
  });
});

