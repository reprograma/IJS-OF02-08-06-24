const { calcularValorBaseProjeto,calcularValorTotalProjeto} = require("../../dominio/calculadora/Projeto/valorProjeto")
const pacote = require("../../dominio/calculadora/Projeto/pacote")
jest.mock("../../dominio/calculadora/Projeto/pacote")
describe("Calcular valor projeto basico",()=>{
    beforeEach(()=>{
        pacote.calcularPacote.mockReturnValue("pacote_basico")
    })
    test("calcular valor total projeto - ssr, 15",()=>{
        const valorHora =15;
        const funcionalidades =['ssr']
        const retorno = calcularValorTotalProjeto(funcionalidades, valorHora);
        const esperado =132;
        expect(esperado).toBe(retorno)
    });

    test('calcular valor total do projeto quando 30 horas e 30 reais/hora - simulando mock',()=>{
        const valorHora=30;
        const funcionalidades=['formulario', 'responsividade']
        const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);
        const esperado = 1056;
        expect(esperado).toBe(retornado)
    })
    test('calcular valor total do projeto - funcionalidade desconhecida', () => {
        const valorHora = 20;
        const funcionalidades = ['funcionalidade_desconhecida'];
        const retorno = calcularValorTotalProjeto(funcionalidades, valorHora);
        const esperado = 0; 
        expect(esperado).toBe(retorno);
    });
    test('calcular valor total do projeto - várias funcionalidades', () => {
        const valorHora = 25;
        const funcionalidades = ['formulario', 'ssr', 'construcao_1_pagina', 'integracao_mailchimp'];
        const retorno = calcularValorTotalProjeto(funcionalidades, valorHora);
        const esperado = 1320; 
        expect(esperado).toBe(retorno);
    });
})

describe("Calcular valor projeto intermediario",()=>{
    beforeEach(()=>{
        pacote.calcularPacote.mockReturnValue("pacote_intermediario")
    })
    test('calcular valor total do projeto quando 90 horas e 30 reais/hora - simulando mock',()=>{
        const valorHora=30;
        const funcionalidades=['formulario', 'responsividade']
        const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);
        const esperado = 1075
        expect(esperado).toBe(retornado)
    })
    test('calcular valor total do projeto - nenhuma funcionalidade', () => {
        const valorHora = 30;
        const funcionalidades = [];
        const retorno = calcularValorTotalProjeto(funcionalidades, valorHora);
        const esperado = 0; 
        expect(esperado).toBe(retorno);
    });
    test('calcular valor total do projeto - várias funcionalidades ', () => {
        const valorHora = 40;
        const funcionalidades = ['formulario', 'ssr', 'construcao_1_pagina', 'integracao_mailchimp'];
        const retorno = calcularValorTotalProjeto(funcionalidades, valorHora);
        const esperado = 2150; 
        expect(esperado).toBe(retorno);
    });
})

describe("Calcular valor projeto premium",()=>{

    test('calcular valor total do projeto quando 190 horas e 30 reais/hora - simulando mock',()=>{
        pacote.calcularPacote.mockReturnValue("pacote_premium")
        const valorHora=30;
        const funcionalidades=['formulario', 'responsividade']
        const retornado = calcularValorTotalProjeto(funcionalidades, valorHora);
        const esperado = 1104
        expect(esperado).toBe(retornado)
    })
    test('calcular valor total do projeto - várias funcionalidades', () => {
        const valorHora = 60;
        const funcionalidades = ['formulario', 'ssr', 'construcao_1_pagina', 'integracao_mailchimp'];
        const retorno = calcularValorTotalProjeto(funcionalidades, valorHora);
        const esperado = 3312; 
        expect(esperado).toBe(retorno);
    });
    test('calcular valor total do projeto - funcionalidade desconhecida', () => {
        const valorHora = 20;
        const funcionalidades = ['funcionalidade_desconhecida'];
        const retorno = calcularValorTotalProjeto(funcionalidades, valorHora);
        const esperado = 0; 
        expect(esperado).toBe(retorno);
    });
})