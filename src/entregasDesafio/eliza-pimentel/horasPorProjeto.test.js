const { calcularHorasDeProjeto } = require("../../dominio/calculadora/Projeto/horasPorProjeto");

describe("Calcular horas de projeto", () => {
    test("Calcular horas de projeto - 1 Funcionalidade", () => {
        const listaDeFuncionalidades = ['formulario'];
        const retornado = calcularHorasDeProjeto(listaDeFuncionalidades);
        const esperado = 16;
        expect(esperado).toBe(retornado);
    });
    test("Calcular horas de projeto - 2 Funcionalidades", () => {
        const listaDeFuncionalidades = ['formulario', 'formulario'];
        const retornado = calcularHorasDeProjeto(listaDeFuncionalidades);
        const esperado = 32;
        expect(esperado).toBe(retornado);
    });
    test("calcular horas de projeto - 3 Páginas", () => {
        const retorno = calcularHorasDeProjeto(['construcao_1_pagina', 'construcao_1_pagina', 'construcao_1_pagina']);
        const esperado = 24;
        expect(esperado).toBe(retorno)
    });
    test("Calcular horas de projeto - 4 Funcionalidades diferentes", () => {
        const listaDeFuncionalidades = ['formulario', 'responsividade', 'otimizacao_seo', 'construcao_1_pagina'];
        const retornado = calcularHorasDeProjeto(listaDeFuncionalidades);
        const esperado = 56;
        expect(esperado).toBe(retornado);
    });

    // Teste para lista vazia
    test("Calcular horas de projeto - Lista vazia", () => {
        const listaDeFuncionalidades = [];
        const retornado = calcularHorasDeProjeto(listaDeFuncionalidades);
        const esperado = 0;
        expect(esperado).toBe(retornado);
    });

    // Teste para verificar funcionalidade não existente
    test("Calcular horas de projeto - Funcionalidade inexistente", () => {
        const listaDeFuncionalidades = ['funcionalidade_inexistente'];
        const retornado = calcularHorasDeProjeto(listaDeFuncionalidades);
        const esperado = NaN; // O valor retornado é undefined, mas na soma ele se torna NaN
        expect(retornado).toBeNaN();
    });

    // Teste para funcionalidades repetidas
    test("Calcular horas de projeto - Funcionalidades repetidas", () => {
        const listaDeFuncionalidades = ['setup', 'setup', 'setup'];
        const retornado = calcularHorasDeProjeto(listaDeFuncionalidades);
        const esperado = 24; // 8 + 8 + 8
        expect(esperado).toBe(retornado);
    });
});