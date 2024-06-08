const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto');

describe('calcular Horas Por Projeto', () => {

    test('calcular horas por projeto - 1 funcionalidade', () => {
        const listaDeFuncionalidades = ["formulario"];
        const retorno = calcularHorasDeProjeto(listaDeFuncionalidades); // Corrigido o nome da função aqui
        const esperado = 16;
        expect(esperado).toBe(retorno);
    });
});

