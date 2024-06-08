const{ calcularHorasDeProjeto} = require("../../dominio/calculadora/Projeto/horasPorProjeto");

describe("Calcular horas de projeto", () => {
    test('calcular horas de projeto - 1 funcionalidade', () => {
        const listaDeFuncionalidades = ['formulario'];
        const retorno = calcularHorasDeProjeto(listaDeFuncionalidades);
        const esperado = 16;
        expect(esperado).toBe(retorno);
    });

    test("calcular horas de projeto - 2 funcionalidades iguais", () => {
        const listaDeFuncionalidades = ['formulario', 'formulario'];
        const retorno = calcularHorasDeProjeto(listaDeFuncionalidades);
        const esperado = 32;
        expect(esperado).toBe(retorno);
    });

    test("calcular horas de projeto - 3 paginas", () => {
        const listaDeFuncionalidades = ['construcao_1_pagina', 'construcao_1_pagina','construcao_1_pagina'];
        const retorno = calcularHorasDeProjeto(listaDeFuncionalidades);
        const esperado = 24;
        expect(esperado).toBe(retorno);
    });

    test("calcular horas de projeto - 4 funcionalidades diferentes", () => {
        const listaDeFuncionalidades = ['formulario', 'responsividade','otimizacao_seo','construcao_1_pagina'];
        const retorno = calcularHorasDeProjeto(listaDeFuncionalidades);
        const esperado = 56;
        expect(esperado).toBe(retorno);
    });
});