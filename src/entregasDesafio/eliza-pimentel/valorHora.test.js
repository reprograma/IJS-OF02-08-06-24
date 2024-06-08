const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora');

describe('Calcular o valor da hora', () => {
  test("Calcular o valor da hora - Renda mensal de 3000", () => {
    const retorno = calcularValorPorHora(3000);
    const esperado = 18;
    expect(esperado).toBe(retorno);
  });
  test("Calcular o valor da hora - Renda mensal de 4000", () => {
    const retorno = calcularValorPorHora(4000);
    const esperado = 23;
    expect(esperado).toBe(retorno);
  });
  test("Calcular o valor da hora - Renda mensal de 15000", () => {
    const retorno = calcularValorPorHora(15000);
    const esperado = 86;
    expect(esperado).toBe(retorno);
  });

  test("Calcular o valor da hora - Renda mensal de 2000", () => {
    const retorno = calcularValorPorHora(2000);
    const esperado = 12;
    expect(esperado).toBe(retorno);
  });

  // teste para renda mensal zero
  test("Calcular o valor da hora - Renda mensal de 0", () => {
    const retorno = calcularValorPorHora(0);
    const esperado = 0;
    expect(esperado).toBe(retorno);
  });

  // teste para verificar arredondamento
  test("Calcular o valor da hora - Renda mensal de 3333", () => {
    const retorno = calcularValorPorHora(3333);
    const esperado = 19;
    expect(esperado).toBe(retorno);
  });

   // teste para verificar entradas não numéricas
  test("Calcular o valor da hora - Renda mensal como string '4000'", () => {
    const retorno = calcularValorPorHora('4000');
    const esperado = 23;
    expect(esperado).toBe(retorno);
  });

  test("Calcular o valor da hora - Renda mensal como string NAN 'quatrocendos mil'", () => {
    expect(() => {
      calcularValorPorHora('quatrocendos mil');
    }).toThrow(TypeError); 
  });


});