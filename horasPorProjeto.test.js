const { calcularHorasDeProjeto } = require('../../../../dominio/calculadora/Projeto/horasPorProjeto');



describe("Calcular horas de projeto", () => {
  test('calcular horas de projeto - 1 funcionalidade duplicada', () => {
    const listaDeFuncionalidades = ['formulario', 'formulario'];
    const retornado = calcularHorasDeProjeto(listaDeFuncionalidades);
    const esperado = 32; // 16 (formulario) * 2
    expect(retornado).toBe(esperado);
  });

  test('calcular horas de projeto - múltiplas funcionalidades', () => {
    const listaDeFuncionalidades = ['formulario', 'setup', 'responsividade'];
    const retornado = calcularHorasDeProjeto(listaDeFuncionalidades);
    const esperado = 40; // 16 (formulario) + 8 (setup) + 16 (responsividade)
    expect(retornado).toBe(esperado);
  });

  test('calcular horas de projeto - sem funcionalidades', () => {
    const listaDeFuncionalidades = [];
    const retornado = calcularHorasDeProjeto(listaDeFuncionalidades);
    const esperado = 0;
    expect(retornado).toBe(esperado);
  });

  test('calcular horas de projeto - funcionalidade inexistente', () => {
    const listaDeFuncionalidades = ['formulario', 'funcionalidade_inexistente'];
    const retornado = calcularHorasDeProjeto(listaDeFuncionalidades);
    const esperado = 16; // 16 (formulario), funcionalidade inexistente não conta
    expect(retornado).toBe(esperado);
  });

  test('calcular horas de projeto - todas as funcionalidades', () => {
    const listaDeFuncionalidades = ['setup', 'formulario', 'responsividade', 'otimizacao_seo', 'construcao_1_pagina', 'integracao_mailchimp', 'ssr', 'integracao_api_propria'];
    const retornado = calcularHorasDeProjeto(listaDeFuncionalidades);
    const esperado = 104; // 8 + 16 + 16 + 16 + 8 + 16 + 8 + 16
    expect(retornado).toBe(esperado);
  });
});
