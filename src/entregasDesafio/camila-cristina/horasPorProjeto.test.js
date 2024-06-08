const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto');

describe('Calcular horas de projeto', () => {
  test('calcular horas de projeto - 1 funcionalidade', () => {
    const listaFuncionalidades = ['formulario']
    const retornado = calcularHorasDeProjeto(listaFuncionalidades)
    const esperado = 16

    expect(esperado).toBe(retornado)
  })

  test('calcular horas de projeto - 2 funcionalidades iguais', () => {
    const listaFuncionalidades = ['formulario', 'formulario']
    const retornado = calcularHorasDeProjeto(listaFuncionalidades)
    const esperado = 32

    expect(esperado).toBe(retornado)
  })

  test('calcular horas de projeto - 4 funcionalidades diferentes', () => {
    const listaFuncionalidades = ['formulario', 'responsividade', 'otimizacao_seo', 'construcao_1_pagina']
    const retornado = calcularHorasDeProjeto(listaFuncionalidades)
    const esperado = 56

    expect(esperado).toBe(retornado)
  })
})