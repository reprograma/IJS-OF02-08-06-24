const {calcularValorTotalProjeto} = require('../../dominio/calculadora/Projeto/valorProjeto')
const pacote = require('../../dominio/calculadora/Projeto/pacote')

jest.mock('../../dominio/calculadora/Projeto/pacote')

describe('pacote basico', () => {

  // beforeAll(() => {
  //   // unica vez
  //   pacote.calcularPacote.mockReturnValue('pacote_basico')
  // })

  beforeEach(() => {
    // para cada teste
    pacote.calcularPacote.mockReturnValue('pacote_basico')
  })


  test('calcular valor total do projeto quando 30 horas e 30 reais/hora', () => {
    
    const valorHora = 30;
    const funcionalidades= [ 'formulario', 'responsividade']
    const retornado = calcularValorTotalProjeto(funcionalidades, valorHora)
    const esperado = 1056;

    expect(esperado).toBe(retornado)
  })

  test('calcular valor total do projeto quando 30 horas e 30 reais/hora - simulando mock', () => {
    const valorHora = 30;
    const funcionalidades= [ 'formulario', 'responsividade']
    const retornado = calcularValorTotalProjeto(funcionalidades, valorHora)
    const esperado = 1056

    expect(esperado).toBe(retornado)
  })
  
})

describe('pacote intermediario', () => {
  test('calcular valor total do projeto quando 74 horas e 30 reais/hora', () => {
    
  

    const valorHora = 30;
    const funcionalidades= [ 'formulario', 'responsividade', 'integracao_mailchimp', 'otimizacao_seo', 'setup']
    const retornado = calcularValorTotalProjeto(funcionalidades, valorHora)
    const esperado = 2419;

    expect(esperado).toBe(retornado)
  })
})

describe('pacote premium', () => {
  beforeEach(() => {
    // para cada teste
    pacote.calcularPacote.mockReturnValue('pacote_premium')
  })

  test('calcular valor total do projeto quando 30 horas e 30 reais/hora', () => {
    
    const valorHora = 30;
    const funcionalidades= [ 'formulario', 'responsividade', 'integracao_mailchimp', 'otimizacao_seo', 'integracao_api_propria', 'ssr', 'construcao_1_pagina', 'setup']
    const retornado = calcularValorTotalProjeto(funcionalidades, valorHora)
    const esperado = 3588;

    expect(esperado).toBe(retornado)
  })
})