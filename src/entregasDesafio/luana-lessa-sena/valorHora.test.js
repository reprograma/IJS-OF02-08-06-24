const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora');
const { HORAS_POR_DIA, DIAS_UTEIS_NO_MES } = require('../../dominio/calculadora/constantes/constantes');

describe('Calcular valor por hora', () => {
    test('deve retornar o valor por hora de uma renda mensal de 3000.00', () => {
        const rendaMensal = 3000;
        const horasTrabalhadasPorMes = HORAS_POR_DIA * DIAS_UTEIS_NO_MES;

        const valorEsperado = Math.ceil(rendaMensal / horasTrabalhadasPorMes);
        const valorCalculado = calcularValorPorHora(rendaMensal);

        expect(valorCalculado).toBe(valorEsperado);
    });

    test('deve retornar undefined para renda mensal abaixo de zero ou negativa', () => {
        const rendaMensal = -1000;
        const valorPorHora = calcularValorPorHora(rendaMensal);

        expect(valorPorHora).toBeUndefined();

    });
});
