const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote');

describe("Calcular pacote", () =>{
    test("calcular pacote basico quando 23 horas", () =>{
        const retornado = calcularPacote(23);
        const esperado = 'pacote_basico';
        expect(esperado).toBe(retornado);
    });
});