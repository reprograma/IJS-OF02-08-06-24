const {
  calcularValorPorHora,
} = require("../../dominio/calculadora/Hora/valorHora");

describe(" ", () => {
  test("calcular valor da hora - renda mensal 20000", () => {
    const retorno = calcularValorPorHora(20000);
    const esperado = 114; 
    expect(retorno).toBe(esperado);
  });

  test("calcular valor da hora - renda mensal 3000", () => {
    const retorno = calcularValorPorHora(3000);
    const esperado = 18;
    expect(retorno).toBe(esperado);
  });

  test("calcular valor da hora - renda mensal 4000", () => {
    const retorno = calcularValorPorHora(4000);
    const esperado = 23;
    expect(retorno).toBe(esperado);
  });

  test("calcular valor da hora - renda mensal 10000", () => {
    const retorno = calcularValorPorHora(10000);
    const esperado = 57; 
    expect(retorno).toBe(esperado);
  });

  test("calcular valor da hora - renda mensal 15000", () => {
    const retorno = calcularValorPorHora(15000);
    const esperado = 86;
    expect(retorno).toBe(esperado);
  });

  test("calcular valor da hora - renda mensal negativa", () => {
    const retorno = calcularValorPorHora(-5000);
    const esperado = -28;
    expect(retorno).toBe(esperado);
  });

  test("calcular valor da hora - renda mensal 0", () => {
    const retorno = calcularValorPorHora(0);
    const esperado = 0;
    expect(retorno).toBe(esperado);
  });
});
