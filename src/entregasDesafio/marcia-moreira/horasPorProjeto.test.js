// Pensar em cenários de testes conforme as suas funcionalidades no projeto:
// qual comportamento do teste se colocarmos 3 itens iguais

const { calcularValorPorHora } = require('../../dominio/calculadora/Hora');

describe("Calcular horas de projeto", () => {
    test('Calcular horas de projeto - 1 funcionalidade', () => {
        const listaDeFuncionalidades = ['formulario'];
        const retornado = calcularHorasDeProjeto(listaDeFuncionalidades);
        const esperado = 16;
        expect(esperado).toBe(retornado);
    });

    test('Calcular horas de projeto - 3 paginas funcionalidade', () => {
        const retorno = calcularHorasDeProjeto(['construcao_1_pagina','construcao_1_pagina', 'construcao_1_pagina']);
        const esperado = 24;
        expect(esperado).toBe(retorno);
    });
})



// test.only