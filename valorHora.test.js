const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora');

describe("Calcular valor por hora", () => {
  test("Deve calcular o valor correto por hora baseado na renda mensal", () => {
    const rendaMensal = 3000;
    const valorEsperado = 19; // Math.ceil(3000 / 160)
    const valorCalculado = calcularValorPorHora(rendaMensal);
    expect(valorCalculado).toBe(valorEsperado);
  });

  test("Deve calcular o valor correto por hora com uma renda mensal de 5000", () => {
    const rendaMensal = 5000;
    const valorEsperado = 32; // Math.ceil(5000 / 160)
    const valorCalculado = calcularValorPorHora(rendaMensal);
    expect(valorCalculado).toBe(valorEsperado);
  });

  test("Deve calcular o valor correto por hora com uma renda mensal de 0", () => {
    const rendaMensal = 0;
    const valorEsperado = 0; // Math.ceil(0 / 160)
    const valorCalculado = calcularValorPorHora(rendaMensal);
    expect(valorCalculado).toBe(valorEsperado);
  });

  test("Deve calcular o valor correto por hora com uma renda mensal negativa", () => {
    const rendaMensal = -3000;
    const valorEsperado = -17; // Math.ceil(-3000 / 160)
    const valorCalculado = calcularValorPorHora(rendaMensal);
    expect(valorCalculado).toBe(valorEsperado);
  });
});

