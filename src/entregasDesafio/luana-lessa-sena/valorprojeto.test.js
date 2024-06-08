const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto');
const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto');
const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote');

jest.mock('../../dominio/calculadora/Projeto/horasPorProjeto');
jest.mock('../../dominio/calculadora/Projeto/pacote');

describe('Testes para a função calcularValorTotalProjeto', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Deve calcular o valor total do projeto para um pacote básico', () => {
    const funcionalidades = [
      'setup',
      'construcao_1_pagina',
      'ssr'
    ];
    const valorHora = 50;
    const totalDeHorasPorProjeto = 24;
    const pacote = 'pacote_basico';

    calcularHorasDeProjeto.mockReturnValue(totalDeHorasPorProjeto);
    calcularPacote.mockReturnValue(pacote);

    const valorTotal = calcularValorTotalProjeto(funcionalidades, valorHora);
    const valorEsperado = Math.round(totalDeHorasPorProjeto * valorHora * 1.1);

    expect(valorTotal).toBe(valorEsperado);
  });

  test('Deve calcular o valor total do projeto para um pacote intermediário', () => {
    const funcionalidades = [
      'formulario',
      'responsividade',
      'integracao_mailchimp',
      'integracao_api_propria'
    ];
    const valorHora = 50;
    const totalDeHorasPorProjeto = 64; 
    const pacote = 'pacote_intermediario';

    calcularHorasDeProjeto.mockReturnValue(totalDeHorasPorProjeto);
    calcularPacote.mockReturnValue(pacote);

    const valorTotal = calcularValorTotalProjeto(funcionalidades, valorHora);
    const valorEsperado = Math.round(totalDeHorasPorProjeto * valorHora * 1.12);

    expect(valorTotal).toBe(valorEsperado);
  });

  test('Deve calcular o valor total do projeto para um pacote premium', () => {
    const funcionalidades = [
      'formulario',
      'responsividade',
      'otimizacao_seo',
      'integracao_mailchimp',
      'integracao_api_propria'
    ];
    const valorHora = 50;
    const totalDeHorasPorProjeto = 72; 
    const pacote = 'pacote_premium';

    calcularHorasDeProjeto.mockReturnValue(totalDeHorasPorProjeto);
    calcularPacote.mockReturnValue(pacote);

    const valorTotal = calcularValorTotalProjeto(funcionalidades, valorHora);
    const valorEsperado = Math.round(totalDeHorasPorProjeto * valorHora * 1.15);

    expect(valorTotal).toBe(valorEsperado);
  });

});
