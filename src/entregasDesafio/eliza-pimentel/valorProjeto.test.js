const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto');
const pacote = require("../../dominio/calculadora/Projeto/pacote");

jest.mock("../../dominio/calculadora/Projeto/pacote");

describe('pacote basico', () => {
    beforeAll(() => {
        pacote.calcularPacote.mockReturnValue("pacote_basico")
    })
    test('calcular valor total do projeto quando 30 horas e 30 reais/hora', () => {
        const valorHora = 30;
        const funcionalidades = ["formulario", "responsividade"];
        const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);
        const esperado = 1056;
        expect(esperado).toBe(retornado);
    });

    test('calcular valor total do projeto quando 30 horas e 30 reais/hora - simulando mock', () => {
        // pacote.calcularPacote.mockReturnValue("pacote_basico")
        const valorHora = 30;
        const funcionalidades = ["formulario", "responsividade"];
        const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);
        const esperado = 1056;
        expect(esperado).toBe(retornado);
    });
});

    describe('pacote intermediario', () => {
        beforeAll(() => {
            pacote.calcularPacote.mockReturnValue("pacote_intermediario")
        })
        test('calcular valor total do projeto quando 70 horas e 50 reais/hora', () => {
            const valorHora = 50;
            const funcionalidades = ["setup", "formulario", "responsividade", "otimizacao_seo", "integracao_mailchimp"];
            const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);
            const esperado = 4032;
            expect(esperado).toBe(retornado);
        });
    });

    describe('pacote premium', () => {
        beforeAll(() => {
            pacote.calcularPacote.mockReturnValue("pacote_premium")
        })
        test('calcular valor total do projeto quando 150 horas e 100 reais/hora', () => {
            const valorHora = 100;
            const funcionalidades = ["setup", "formulario", "responsividade", "otimizacao_seo", "integracao_mailchimp", "construcao_1_pagina", "integracao_api_propria"];
            const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);
            const esperado = 11040;
            expect(esperado).toBe(retornado);
        });
    });


    
