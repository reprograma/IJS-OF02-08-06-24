const { calcularHorasDePorProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto');

describe('calcular Horas Por Projeto', () => {

    test('calcular horas  por projeto - 1 funcionalidade', () => {
        const listaDeFuncionalidades = ["formulario"];
        const retorno = calcularHorasDePorProjeto(listaDeFuncionalidades);
        const esperado = 16;
        expect(esperado).toBe(retorno);
    });
});