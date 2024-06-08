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
  
  test('lista de funcionalidades vazia', () => {
    const funcionalidades = [];
    const horasEsperadas = 0;

    expect(calcularHorasDeProjeto(funcionalidades)).toBe(horasEsperadas);
  });

  test('só uma funcionalidade', () => {
    const funcionalidades = ['integracao_api_propria'];
    const horasEsperadas = HORAS_POR_FUNCIONALIDADE['integracao_api_propria'];

    expect(calcularHorasDeProjeto(funcionalidades)).toBe(horasEsperadas);
  });

  test('com funcionalidades repetidas', () => {
    const funcionalidades = ['setup', 'setup', 'formulario'];
    const horasEsperadas = 
      2 * HORAS_POR_FUNCIONALIDADE['setup'] + 
      HORAS_POR_FUNCIONALIDADE['formulario'];

    expect(calcularHorasDeProjeto(funcionalidades)).toBe(horasEsperadas);
  });

  test('para todas as funcionalidades', () => {
    const funcionalidades = Object.keys(HORAS_POR_FUNCIONALIDADE);
    const horasEsperadas = funcionalidades
      .map(func => HORAS_POR_FUNCIONALIDADE[func])
      .reduce((sum, currentValue) => sum + currentValue, 0);

    expect(calcularHorasDeProjeto(funcionalidades)).toBe(horasEsperadas);
  });

});

