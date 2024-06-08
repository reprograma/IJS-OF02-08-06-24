const { calcularValorBaseProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto');

//fazer o teste

describe('pacote basico', () => {
  test('Deve calcular o valor base do projeto', () => {
    const valorHora = 30;
    const funcionalidades = ['formulario', 'responsividade'];
    const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);
    const esperado = 1056;
    expect(esperado).toBe(retornado);
  });
});
