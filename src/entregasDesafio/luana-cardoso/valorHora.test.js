const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora');

test("calcular valor da hora - renda mensal 3000", () => {
    const retorno = calcularValorPorHora(3000);
    const esperado = 18; 
    expect(retorno).toBe(esperado);
});

test("calcular valor da hora - renda mensal 5000", () => {
    const retorno = calcularValorPorHora(5000);
    const esperado = 29; 
    expect(retorno).toBe(esperado);
});

test("calcular valor da hora - renda mensal 4500", () => {
    const retorno = calcularValorPorHora(4500);
    const esperado = 26; 
    expect(retorno).toBe(esperado);
});

test("calcular valor da hora - renda mensal 10000", () => {
    const retorno = calcularValorPorHora(10000);
    const esperado = 57; 
    expect(retorno).toBe(esperado);
});
