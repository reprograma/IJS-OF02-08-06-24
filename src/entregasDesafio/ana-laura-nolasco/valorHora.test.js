const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora');

describe('Testes para o valor da hora', () => {

    test("calcular valor da hora - renda mensal 3000",()=>{
        const retorno = calcularValorPorHora(3000);
        const esperado = 18;
        expect(esperado).toBe(retorno);
    });

    test("calcular valor da hora - renda mensal  4000 ",()=>{
        const retorno = calcularValorPorHora(4000);
        const esperado = 23;
        expect(esperado).toBe(retorno);
    });

    test("calcular valor da hora - renda mensal 15000",()=>{
        const retorno = calcularValorPorHora(15000);
        const esperado = 86;
        expect(esperado).toBe(retorno);
    });
    
});