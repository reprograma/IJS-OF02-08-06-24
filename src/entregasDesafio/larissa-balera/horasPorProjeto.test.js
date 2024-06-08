const { calcularHorasDeProjeto } = require("../../dominio/calculadora/Projeto/horasPorProjeto");

describe("Calcular horas por projeto", () => {

    test("Calcular horas de projeto - 1 funcionalidade", () => {
        const listaDeFuncionalidades = ["formulario"];
        const retorno = calcularHorasDeProjeto(listaDeFuncionalidades);
        const esperado = 16;
        expect(esperado).toBe(retorno);
    });

    test("Calcular horas de projeto - 2 funcionalidades", () => {
        const listaDeFuncionalidades = ["formulario", "responsividade"];
        const retorno = calcularHorasDeProjeto(listaDeFuncionalidades);
        const esperado = 32;
        expect(esperado).toBe(retorno);
    });

    test("Calcular horas de projeto - 3 funcionalidades", () => {
        const listaDeFuncionalidades = ["formulario", "otimizacao_seo", "ssr"];
        const retorno = calcularHorasDeProjeto(listaDeFuncionalidades);
        const esperado = 40;
        expect(esperado).toBe(retorno)
    });

    test("Calcular horas de projeto - 4 funcionalidades", () => {
        const listaDeFuncionalidades = ["formulario", "construcao_1_pagina", "responsividade", "setup"];
        const retorno = calcularHorasDeProjeto(listaDeFuncionalidades);
        const esperado = 48;
        expect(esperado).toBe(retorno)
    });

});
