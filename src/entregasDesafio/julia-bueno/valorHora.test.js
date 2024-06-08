const { calcularValorPorHora} = require('../../dominio/calculadora/Hora/ValorHora');

describe('Valor por hora', () => {
  it('Deve calcular o valor por hora', () => {
    const rendaMensal = 1000;
    const valorPorHora = calcularValorPorHora(rendaMensal);
    expect(valorPorHora).toBe(6);
  });
});