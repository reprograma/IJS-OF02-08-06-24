const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto');

describe("Calcular horas do projeto", () => {
    test('Calcular horas do projeto - 1 funcionalidade', () => {
        const listaDeFuncionalidades = ['formulario'];
        const retornado = calcularHorasDeProjeto(listaDeFuncionalidades);
        const esperado = 16;
        expect(esperado).toBe(retornado);
    });


    test('Calcular horas do projeto - 2 funcionalidades', () => {
        const listaDeFuncionalidades = ['formulario', 'formulario'];
        const retornado = calcularHorasDeProjeto(listaDeFuncionalidades);
        const esperado = 32;
        expect(esperado).toBe(retornado);
    });

    test('Calcular horas do projeto - 3 paginas', () => {
        const listaDeFuncionalidades = ['construcao_1_pagina', 'construcao_1_pagina', 'construcao_1_pagina'];
        const retornado = calcularHorasDeProjeto(listaDeFuncionalidades);
        const esperado = 24;
        expect(esperado).toBe(retornado);
    });

    test('Calcular horas do projeto - 4 funcionalidades', () => {
        const listaDeFuncionalidades = ['formulario', 'responsividade', 'otimizacao_seo', 'construcao_1_pagina'];
        const retornado = calcularHorasDeProjeto(listaDeFuncionalidades);
        const esperado = 56;
        expect(esperado).toBe(retornado);
    });

});
