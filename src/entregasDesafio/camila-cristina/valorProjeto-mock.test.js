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

describe('pacote intermediario mock', () => {
  beforeEach(() => {
    // para cada teste
    pacote.calcularPacote.mockReturnValue('pacote_intermediario')
  })

  test('calcular valor total do projeto quando 64 horas e 30 reais/hora', () => {
    

    const valorHora = 30;
    const funcionalidades= ['formulario', 'responsividade', 'integracao_mailchimp', 'otimizacao_seo']
    const retornado = calcularValorTotalProjeto(funcionalidades, valorHora)
    const esperado = 2150;

    expect(esperado).toBe(retornado)
  })
})

describe('pacote premium mock', () => {
  beforeEach(() => {
    // para cada teste
    pacote.calcularPacote.mockReturnValue('pacote_premium')
  })

  test('calcular valor total do projeto quando 104 horas e 30 reais/hora', () => {
    
    const valorHora = 30;
    const funcionalidades= [ 'formulario', 'responsividade', 'integracao_mailchimp', 'otimizacao_seo', 'integracao_api_propria', 'ssr', 'construcao_1_pagina', 'setup']
    const retornado = calcularValorTotalProjeto(funcionalidades, valorHora)
    const esperado = 3588;

    expect(esperado).toBe(retornado)
  })
})