const { calcularHorasDeProjeto } = require("../../dominio/calculadora/Projeto/horasPorProjeto")

describe("Calcular horas de projeto",()=>{

    test("calcular horas de projeto - formulario e ssr",()=>{
        const lista_de_funcionalidades = ['formulario','ssr'];
        const retorno = calcularHorasDeProjeto(lista_de_funcionalidades);
        const esperado =24;
        expect(esperado).toBe(retorno)
    });
    
    test("calcular horas de projeto - 3 paginas",()=>{
        const lista_de_funcionalidades = ['construcao_1_pagina','construcao_1_pagina','construcao_1_pagina']
        const retorno = calcularHorasDeProjeto(lista_de_funcionalidades);
        const esperado =24;
        expect(esperado).toBe(retorno)
    });

     
    test("calcular horas de projeto - 1 funcionalidade",()=>{
        const lista_de_funcionalidades = ['integracao_mailchimp'];
        const retorno = calcularHorasDeProjeto(lista_de_funcionalidades);
        const esperado =16;
        expect(esperado).toBe(retorno)
    });
    
    test("calcular horas de projeto - nenhuma funcionalidade",()=>{
        const retorno = calcularHorasDeProjeto([]);
        const esperado =0;
        expect(esperado).toBe(retorno)
    });
    test("calcular horas de projeto - varias funcionalidades", () => {
        const lista_de_funcionalidades = ['formulario', 'ssr', 'construcao_1_pagina', 'integracao_mailchimp'];
        const retorno = calcularHorasDeProjeto(lista_de_funcionalidades);
        const esperado = 48; 
        expect(esperado).toBe(retorno);
    });

    test("calcular horas de projeto - funcionalidade desconhecida", () => {
        const lista_de_funcionalidades = ['funcionalidade_desconhecida'];
        const retorno = calcularHorasDeProjeto(lista_de_funcionalidades);
        const esperado = 0; 
        expect(esperado).toBe(retorno);
    });


    test("calcular horas de projeto - muitas funcionalidades", () => {
        const lista_de_funcionalidades = Array(30).fill('formulario');
        const retorno = calcularHorasDeProjeto(lista_de_funcionalidades);
        const esperado = 480; 
        expect(esperado).toBe(retorno);
    });
})