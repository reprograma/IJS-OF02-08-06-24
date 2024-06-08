const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto');
const { HORAS_POR_FUNCIONALIDADE } = require('../../dominio/calculadora/constantes/constantes');

describe('calcularHorasDeProjeto', () => {
  test('calcular horas de projeto com base na lista de funcionalidades', () => {
    const funcionalidades = ['setup', 'formulario', 'responsividade'];
    const horasEsperadas = funcionalidades
      .map(func => HORAS_POR_FUNCIONALIDADE[func])
      .reduce((sum, currentValue) => sum + currentValue, 0);

    expect(calcularHorasDeProjeto(funcionalidades)).toBe(horasEsperadas);
  });
});

