const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora');

describe('Calcular o valor da hora', () => {
  test("Calcular o valor da hora - Renda mensal de 3000", () => {
    const retorno = calcularValorPorHora(3000);
    const esperado = 18;
    expect(esperado).toBe(retorno);
  });

  test('Calcular o valor da hora - Renda mensal de 4000', () => {
    const retorno = calcularValorPorHora(4000);
    const esperado = 23;
    expect(esperado).toBe(retorno);
  });

  test('Calcular o valor da hora - Renda mensal de 15000', () => {
    const retorno = calcularValorPorHora(15000);
    const esperado = 86;
    expect(esperado).toBe(retorno);
  });

  test('Calcular o valor da hora - Renda mensal de 5000', () => {
    const retorno = calcularValorPorHora(5000);
    const esperado = 29;
    expect(esperado).toBe(retorno);
  });
});


