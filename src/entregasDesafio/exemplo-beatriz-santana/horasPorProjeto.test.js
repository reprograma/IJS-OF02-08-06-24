const {calcularHorasDeProjeto} = require ("../../dominio/calculadora/Projeto/horasPorProjeto")

describe("Calcular horas do projeto",() => {
    test('calcular horas de projeto - 1 funcionalidade', () =>{
        const listaDeFuncionalidades = ['formulario'];
        const retornado = calcularHorasDeProjeto(listaDeFuncionalidades);
        const esperado = 16;
        expect(esperado).toBe(retornado)
    })

    test('calcular horas de projeto - 2 funcionalidades iguais', () =>{
        const listaDeFuncionalidades = ['formulario','formulario'];
        const retornado = calcularHorasDeProjeto(listaDeFuncionalidades);
        const esperado = 32;
        expect(esperado).toBe(retornado)
    })

    test('calcular horas de projeto - 3 paginas', () =>{
        const listaDeFuncionalidades = ['construcao_1_pagina','construcao_1_pagina','construcao_1_pagina',];
        const retornado = calcularHorasDeProjeto(listaDeFuncionalidades);
        const esperado = 24;
        expect(esperado).toBe(retornado)
    })
    
    test('calcular horas de projeto - 3 funcionalidades', () =>{
        const listaDeFuncionalidades = ['formulario', 'responsividade', 'otimizacao_seo',];
        const retornado = calcularHorasDeProjeto(listaDeFuncionalidades);
        const esperado = 46;
        expect(esperado).toBe(retornado)
    })
})