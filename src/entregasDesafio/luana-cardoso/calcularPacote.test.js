const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote');

describe('calcularPacote', () => {
  test('calcular pacote - 23 horas', () => {
    const retorno = calcularPacote(23);
    const esperado = 'pacote_basico';
    expect(retorno).toBe(esperado);
  });

  test('calcular pacote - 99 horas (pacote_intermediario)', () => {
    const retorno = calcularPacote(9);
    const esperado = 'pacote_intermediario';
    expect(retorno).toBe(esperado);
  });

  test('calcular pacote - 199 horas ou mais (pacote_premium)', () => {
    const retorno = calcularPacote(199);
    const esperado = 'pacote_premium';
    expect(retorno).toBe(esperado);
});

});
