const valorProjeto = require('../../dominio/calculadora/Projeto/valorProjeto');

var testeGenerico = (valorHora, funcionalidades, valorEsperado, stringTeste) => {
    test(stringTeste, () => {
        const calculo = valorProjeto.calcularValorTotalProjeto(funcionalidades, valorHora)
        expect(calculo).toBe(valorEsperado);
    });
};

describe('Pacote basico', () => {
    testeGenerico(
        30,
        ['formulario', 'responsividade'],
        1056,
        'Calcular valor total do projeto quando 32 horas e 30 reais/hora'
    );
    testeGenerico(
        30,
        ['formulario', 'construcao_1_pagina'],
        792,
        'Calcular valor total do projeto quando 24 horas e 30 reais/hora'
    );
});

describe('Pacote intermediario', () => {
    testeGenerico(
        30,
        ['formulario', 'responsividade', 'otimizacao_seo', 'integracao_mailchimp'],
        2150,
        'Calcular valor total do projeto quando 64 horas e 30 reais/hora'
    );
    testeGenerico(
        30,
        ['formulario', 'responsividade', 'otimizacao_seo', 'integracao_mailchimp', 'setup'],
        2419,
        'Calcular valor total do projeto quando 72 horas e 30 reais/hora'
    );
});

describe('Pacote premium', () => {
    testeGenerico(
        30,
        ['formulario', 'responsividade', 'otimizacao_seo', 'integracao_mailchimp', 'setup', 'formulario', 'formulario', 'ssr'],
        3864,
        'Calcular valor total do projeto quando 112 horas e 30 reais/hora'
    );
    testeGenerico(
        30,
        ['formulario', 'responsividade', 'otimizacao_seo', 'integracao_mailchimp', 'setup', 'formulario', 'formulario'],
        3588,
        'Calcular valor total do projeto quando 104 horas e 30 reais/hora'
    );
});