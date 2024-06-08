const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote');

describe("Calcular pacote", () => {
    test("Calcular pacote é básico quando 23 horas", () => {
        const retornado = calcularPacote(23);
        const esperado = 'pacote_basico';
        expect(retornado).toBe(esperado);
    });   
});