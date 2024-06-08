const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto');
const pacote = require("../../dominio//calculadora/Projeto/pacote")

jest.mock('../../dominio/calculadora/Projeto/pacote')

describe('Pacote Básico', () => {
  beforeEach(() => {
    pacote.calcularPacote.mockReturnValue("pacote_basico")
  })

  beforeAll(() => {
    pacote.calcularPacote.mockReturnValue("pacote_basico")
  })

  test('Calcular valor total do projeto quando 30 horas e 30 reais/hora', () => {
    const valorHora = 30;
    const funcionalidades = ['formulario', 'responsividade'];
    const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);
    const esperado = 1056;
    expect(esperado).toBe(retornado);
  });

  test('Calcular valor total do projeto quando 30 horas e 30 reais/hora - Simulação Mock', () => {
    const valorHora = 30;
    const funcionalidades = ['formulario', 'responsividade'];
    const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);
    const esperado = 1056;
    expect(esperado).toBe(retornado);
  });
});

describe('Pacote Intermediário', () => {
  test('Calcular valor total do projeto quando 72 horas e 29 reais/hora', () => {
    const valorHora = 29;
    const funcionalidades = ['setup', 'construcao_1_pagina', 'construcao_1_pagina', 'construcao_1_pagina', 'integracao_mailchimp', 'formulario', 'integracao_api_propria'];
    const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);
    const esperado = 2552;
    expect(esperado).toBe(retornado);
  });
});

describe('Pacote Premium', () => {
  test('Calcular valor total do projeto quando 104 horas e 29 reais/hora', () => {
    const valorHora = 29;
    const funcionalidades = ['setup', 'construcao_1_pagina', 'construcao_1_pagina', 'construcao_1_pagina', 'integracao_mailchimp', 'formulario', 'integracao_api_propria', 'responsividade', 'otimizacao_seo', 'ssr'];
    const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);
    const esperado = 3828;
    expect(esperado).toBe(retornado);
  });
});