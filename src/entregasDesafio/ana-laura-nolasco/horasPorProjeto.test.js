const {calcularHorasDeProjeto} = require('../../dominio/calculadora/Projeto/horasPorProjeto');

describe('Calcular horas de projeto', () => {

    test("calcular horas por projeto - 1 funcionalidades",()=>{

            const listaDeFuncionalidades = ["formulario"];
            const retornado = calcularHorasDeProjeto(listaDeFuncionalidades);
            const esperado = 16;
            expect(esperado).toBe(retornado);

    });

    test("calcular horas por projeto - 2 funcionalidades",()=>{

        const listaDeFuncionalidades = ["formulario","formulario"];
        const retornado = calcularHorasDeProjeto(listaDeFuncionalidades);
        const esperado = 32;
        expect(esperado).toBe(retornado);

    });

    test("calcular horas por projeto - 3 funcionalidades",()=>{

        const listaDeFuncionalidades = ["formulario","formulario", "construcao_1_pagina" ];
        const retornado = calcularHorasDeProjeto(listaDeFuncionalidades);
        const esperado = 40;
        expect(esperado).toBe(retornado);

    });

});
