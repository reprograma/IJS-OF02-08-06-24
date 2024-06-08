const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora');

describe("Cálculo do Valor por Hora", () => {
    test("deve calcular o valor por hora com base na renda mensal", () => {
        const rendaMensal = 3000; // Renda mensal definida
        const horasTrabalhadasPorMes = 22 * 8; // 22 dias úteis por mês * 8 horas por dia
        const valorPorHoraEsperado = rendaMensal / horasTrabalhadasPorMes; // Valor esperado calculado

        const valorPorHoraCalculado = calcularValorPorHora(rendaMensal); // Chamada da função para calcular o valor por hora

        expect(valorPorHoraCalculado).toBe(Math.ceil(valorPorHoraEsperado)); // Verificação se o valor retornado é igual ao valor esperado, arredondado para cima
    });
});
