const {calcularValorTotalProjeto} = require('../../dominio/calculadora/Projeto/valorProjeto')

describe('pacote basico', () => {
  test('calcular valor total do projeto quando 30 horas e 30 reais/hora', () => {
    
    const valorHora = 30;
    const funcionalidades= [ 'formulario', 'responsividade']
    const retornado = calcularValorTotalProjeto(funcionalidades, valorHora)
    const esperado = 1056;

    expect(esperado).toBe(retornado)
  })
})

describe('pacote intermediario', () => {
  test('calcular valor total do projeto quando 64 horas e 30 reais/hora', () => {
    
    const valorHora = 30;
    const funcionalidades= [ 'formulario', 'responsividade', 'integracao_mailchimp', 'otimizacao_seo']
    const retornado = calcularValorTotalProjeto(funcionalidades, valorHora)
    const esperado = 2150;

    expect(esperado).toBe(retornado)
  })
})

describe('pacote premium', () => {
  test('calcular valor total do projeto quando 104 horas e 30 reais/hora', () => {
    
    const valorHora = 30;
    const funcionalidades= [ 'formulario', 'responsividade', 'integracao_mailchimp', 'otimizacao_seo', 'integracao_api_propria', 'ssr', 'construcao_1_pagina', 'setup']
    const retornado = calcularValorTotalProjeto(funcionalidades, valorHora)
    const esperado = 3588;

    expect(esperado).toBe(retornado)
  })
})