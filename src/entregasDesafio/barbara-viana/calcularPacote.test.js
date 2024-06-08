const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote');

describe('Calcula pacote', () => {
  test('Calcular pacote básico quando 23 horas', () => {
    const retornado = calcularPacote(23);
    const esperado = 'pacote_basico';
    expect(esperado).toBe(retornado)
  });

  test('Calcular pacote básico quando 8 horas', () => {
    const retornado = calcularPacote(8);
    const esperado = 'pacote_basico';
    expect(esperado).toBe(retornado)
  });

  test('Calcular pacote intermediário quando 53 horas', () => {
    const retornado = calcularPacote(53);
    const esperado = 'pacote_intermediario';
    expect(esperado).toBe(retornado)
  });

  test('Calcular pacote intermediário quando 100 horas', () => {
    const retornado = calcularPacote(100);
    const esperado = 'pacote_intermediario';
    expect(esperado).toBe(retornado)
  });


  test('Calcular pacote premium quando 199 horas', () => {
    const retornado = calcularPacote(199);
    const esperado = 'pacote_premium';
    expect(esperado).toBe(retornado);
  });
})